import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  name: string;
  image: string;
  title: string;
  avatarUrl: string;
  userId: string;
};

const ProjectCard = (prop: any) => {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link
        href={`/project/${prop.id}`}
        className="flexCenter group relative w-full h-full"
      >
        <Image
          src={prop.image}
          width={414}
          height={314}
          className="w-full h-full object-cover rounded-2xl"
          alt="project image"
        />
        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full">{prop.title}</p>
        </div>
      </Link>

      <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
        <Link href={`/profile/${prop.userId}`}>
          <div className="flexCenter gap-2">
            <Image
              src={prop.avatarUrl}
              width={24}
              height={24}
              className="rounded-full"
              alt="profile image"
            />
            <p>{prop.name}</p>
          </div>
        </Link>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src="/hearth.svg" width={13} height={12} alt="heart" />
            <p className="text-sm">{20}</p>
          </div>
          <div className="flexCenter gap-2">
            <Image src="/eye.svg" width={12} height={9} alt="eye" />
            <p className="text-sm">{11}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
