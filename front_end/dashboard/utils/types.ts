import { ReactNode } from "react";

export interface UserType {
  username: {
    firstname: string;
    lastname: string;
  };
  email: string;
  role: string;
}

export interface FitnessType {
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

export interface PageType {
  name: string;
  url: string;
  icon?: ReactNode;
}
