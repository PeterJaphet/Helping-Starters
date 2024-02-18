import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { SessionInterface, UserProfile } from "@/utils/common.types";
import connectDB from "@/config/db";
import User, { add, find } from "@/models/user";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(
        {
          ...token,
          iss: "grafbase",
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        secret
      );

      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token!, secret);
      return decodedToken as JWT;
    },
  },
  theme: {
    colorScheme: "light",
    logo: "/logo.png",
  },
  callbacks: {
    async session({ session }) {
      await connectDB();
      const email = session?.user?.email as string;
      try {
        const User = await find(JSON.parse(JSON.stringify({ email: email })));

        const newSession = JSON.parse(
          JSON.stringify({
            ...session,
            user: { ...session.user, ...User },
          })
        );

        console.log(newSession);
        return newSession;
      } catch (error) {
        console.log("Error retrieving user data", error);
        return session;
      }
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        await connectDB();
        const User = await find(
          JSON.parse(JSON.stringify({ email: user.email }))
        );

        console.log(User + "creating...");

        if (!User) {
          await add(
            JSON.parse(
              JSON.stringify({
                name: user.name!,
                email: user.email!,
                avatarUrl: user.image,
              })
            )
          );
        }
        return true;
      } catch (error: any) {
        console.log(error);
        return false;
      }
    },
  },
};

export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as SessionInterface;
  return session;
}
