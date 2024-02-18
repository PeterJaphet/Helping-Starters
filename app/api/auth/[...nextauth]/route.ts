import NextAuth from "next-auth/next";

import { authOptions } from "@/lib/session";

import connectDB  from "@/config/db";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
