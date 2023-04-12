import mongoose from "mongoose";

type Contact = {
  phone_number: number;
  email: string;
};

type Spec = {
  wifi: boolean;
  shower: boolean;
  parking: boolean;
};

const fitnessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    address: {
      district: String,
      description: String,
      coordinates: {
        latitude: Number,
        longtitude: Number,
      },
    },

    contact: {
      phone_number: Number,
      email: String,
    },
  },
  { collection: "Fitness" },
);

const Fitness = mongoose.model("Fitness", fitnessSchema, "Fitness");

export default Fitness;
