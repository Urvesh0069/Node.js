import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  number: Number,
  password: String,
  gender: String,
});

const User = model("user", UserSchema);

export const find = (query) => User.find(query);
export const create = (data) => User.create(data);
export const findById = (id) => User.findById(id);
export const findByIdAndDelete = (id) => User.findByIdAndDelete(id);
export const findByIdAndUpdate = (id, data, options) =>
  User.findByIdAndUpdate(id, data, options);
