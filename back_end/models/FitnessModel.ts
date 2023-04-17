import mongoose from "mongoose";

interface Fitness {
  _id: string;
  name: string;
  description: string;
  image: Array<string>;
  price: {
    oneMonth: number;
    oneTime?: number;
    threeMonth?: number;
    sixMonth?: number;
    year?: number;
  };
  contact: {
    phone_number: number;
    email?: string;
    social?: Array<string>;
  };
  address: {
    district:
      | "Khan uul"
      | "Nalaikh"
      | "Songino Khairkhan"
      | "Sukhbaatar"
      | "Chilgeltei"
      | "Bayanzurkh"
      | "Bayangol"
      | "Baganuur";
    description: string;
    coord: Array<number>;
  };
  timetable: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  discount?: [{ name: string; discount: number }];

  spec?: {
    wifi: boolean;
    shower: boolean;
    parking: boolean;
  };
}

const fitnessSchema = new mongoose.Schema<Fitness>(
  {
    name: String,
    description: String,
    image: [String],
    price: {
      oneMonth: Number,
      oneTime: Number,
      threeMonth: Number,
      sixMonth: Number,
      year: Number,
    },
    contact: {
      phone_number: Number,
      email: String,
      social: [String],
    },
    address: {
      district: String,
      description: String,
      coord: {
        Type: { type: String, default: "Pointer" },
        coordinates: [Number],
      },
    },
    timetable: {
      monday: String,
      tuesday: String,
      wednesday: String,
      thursday: String,
      friday: String,
      saturday: String,
      sunday: String,
    },
    discount: [{ name: String, discount: Number }],
    spec: {
      wifi: Boolean,
      shower: Boolean,
      parking: Boolean,
    },
  },
  { collection: "Gym" },
);

const Fitness = mongoose.model("Fitness", fitnessSchema, "Gym");
Fitness.collection.createIndex({ "address.coord": "2dsphere" });

export default Fitness;
