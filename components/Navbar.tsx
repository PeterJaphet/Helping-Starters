import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/utils/constants";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";
import { signOut } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="navbar transition ease-in-out duration-1000">
      <div className="container flexBetween">
      <div className="flexStart gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={115}
            height={45}
            alt="Helping starters"
          />
        </Link>
      </div>
      <div className=" border-primary transition ease-in-out duration-1000 hover:border shadow-custom rounded-3xl sm:flex p-2 sm:min-w-[480px] hidden">
        <form className="flexStart align-middle w-full">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none overflow-hidden h-full p-2 w-full"
          />
        </form>
        <span className=" bg-primary rounded-full p-2 cursor-pointer">
          <Image src={"/search.svg"} height={20} width={20} alt="" />
        </span>
      </div>

      <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
