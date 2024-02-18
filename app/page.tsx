import ProjectCard from "@/components/ProjectCard";
import { ProjectInterface } from "@/utils/common.types";
import { useEffect, useState } from "react";

const Home = async () => {
  // const [projects, setProjects] = useState([])

  const projects = await (
    await fetch(process.env.NEXTAUTH_URL + "/api/project", {
      next: { revalidate: 10 },})
  ).json();
  // let projects: [] = [];
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     projects = await (
  //       await fetch(process.env.NEXTAUTH_URL + "/api/project")
  //     ).json();
  //   };

  //   fetchPosts();
  // }, []);

  if (projects.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        Categories
        <p className="no-result-text text-center">
          No projects found, Create a New Project!
        </p>
      </section>
    );
  }
  return (
    <section className="container">
      <div className="flex-start flex-col mb-16">
        <h1>Categories</h1>
        <section className="projects-grid">
          {projects.map((node: any) => (
            <ProjectCard
              key={node?._id}
              id={node?._id}
              image={node?.image}
              title={node?.title}
              name={node?.user?.name}
              avatarUrl={node?.user?.avatarUrl}
              userId={node?.user?.id}
            />
          ))}
        </section>
        <h1>LoadMore</h1>
      </div>
    </section>
  );
};

export default Home;
