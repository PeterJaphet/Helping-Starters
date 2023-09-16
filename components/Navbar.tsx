import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/utils/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
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
      <div className="shadow-md rounded-3xl flex p-2 ">
        <form className="flex justify-center align-middle w-full">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none overflow-hidden h-full p-2"
          />
        </form>
        <span className=" bg-primary rounded-full p-2">
          <Image src={"/search.svg"} height={20} width={20} alt="" />
        </span>
      </div>

      <div>{session ? <>UserPhoto</> : <AuthProviders />}</div>
    </nav>
  );
};

export default Navbar;
