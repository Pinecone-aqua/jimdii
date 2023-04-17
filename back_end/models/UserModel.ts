import mongoose from "mongoose";

interface User {
  _id: string;
  username: {
    firstname: string;
    lastname: string;
  };
  phone?: number;
  email: string;
  password: string;
  address?: {
    coord: number[];
  };
  gender?: "male" | "female" | "other";
  type: "client" | "admin";
  fitness_id?: string;
  birth_date?: string;
  created_date: string;
}

const UserSchema = new mongoose.Schema<User>(
  {
    username: {
      firstname: String,
      lastname: String,
    },
    phone: Number,
    email: String,
    password: String,
    address: {
      coord: {
        type: { type: String, default: "Pointer" },
        coordinates: [Number],
      },
    },
    gender: String,
    type: { type: String, default: "client" },
    fitness_id: String,
    birth_date: String,
    created_date: String,
  },
  { collection: "User" }
);

const User = mongoose.model("User", UserSchema);
User.collection.createIndex({ "address.coord": "2dsphere" });

export default User;
