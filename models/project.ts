import { Schema, model, models } from "mongoose";
import { uploadImage } from "../lib/actions";
import { ProjectFormType } from "@/utils/common.types";
import { findSeveralUsers, getActiveUsers } from "./user";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    liveSiteUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
    category: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Project = models.Project || model("Project", ProjectSchema);

export default Project;

const createNewProject = async (
  form: ProjectFormType,
  creatorId: string,
  token: string
) => {
  try {
    
    const project = new Project({ ...form, user: creatorId });
    await project.save();
    return project;
  } catch (err) {
    throw new Error(`Error creating a new project ${err}`);
  }
};

export { createNewProject };
