import { UserProfile } from "@/utils/common.types";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  avatarUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  linkedUrl: {
    type: String,
  },
 
  //   projectId: {
  //     type: String,
  //   },
}, { timestamps: true });

const User = models.User || model("User", UserSchema);

export default User;

const add = async (data: UserProfile ) => {
  const user = new User(data);
  await user.save();
  return user;
};

const update = async (query, data) => {
  return User.findOneAndUpdate(query, data, { new: true });
};

const find = async (query) => {
  return User.findOne(query, { __v: 0, password: 0 });
};
const findWithP = async (query) => {
  return User.findOne(query);
};

const findSeveralUsers = async (query) => {
  return User.find(query);
};

const deleteUser = async (query) => {
  return User.deleteOne(query);
};

const getOne = async (query) => {};

const getActiveUsers = async (page, pageSize) => {
  return User.find({}, { __v: 0, password: 0 })
    .sort({ _id: -1 })
    .skip(page)
    .limit(pageSize);
};

export {
  add,
  update,
  find,
  findWithP,
  getOne,
  getActiveUsers,
  findSeveralUsers,
  deleteUser,
};
