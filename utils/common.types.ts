import { User, Session } from 'next-auth'

export interface SessionInterface extends Session {
    user: User & {
      id: string;
      name: string;
      email: string;
      avatarUrl: string;
    };
  }
  export interface UserProfile {
    // id: string; !null 
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    githubUrl: string | null;
    linkedinUrl: string | null;
    // projects: {
    //   edges: { node: ProjectInterface }[];
    //   pageInfo: {
    //     hasPreviousPage: boolean;
    //     hasNextPage: boolean;
    //     startCursor: string;
    //     endCursor: string;
    //   };
    // };
}

export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
  id: string;
  createdBy: {
    name: string;
    email: string;
    avatarUrl: string;
    id: string;
  };
}

export type FormState = {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
};

export interface ProjectFormType {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
}