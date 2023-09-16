import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={115}
              height={45}
              alt="Helping starters"
            />
          </Link>
          <p className="text-start text-sm font-normal mt-5 max-w-xs text-footer">
          Helping starters is the world's leading community for creatives to share, grow, and get hired.
          </p>
        </div>
        <div className="flex items-center justify-between">
            <p className="font-normal text-sm text-footer">&copy; 2023 Helping Starters. All Rights Reserved!</p>
            <p className="font-normal text-sm text-footer">{'10,023'} Projects submitted!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
