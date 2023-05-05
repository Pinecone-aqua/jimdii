export interface UserType {
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
  fitness_id?: string;
  birth_date?: string;
}

export interface FitnessType {
  _id?: string;
  name: string;
  description?: string;
  image: string[];
  price?: {
    oneMonth: number;
    threeMonth?: number;
    onetime: number;
    year?: number;
  };
  address?: {
    district:
      | "Bayangol"
      | "Sukhbaatar"
      | "Khan-uul"
      | "Songino-Khairkhan"
      | "Bayanzurkh"
      | "Chingeltei"
      | "Baganuur";
    description: string;
    coord?: number[];
  };
  timetable?: TimetableType;
  discount?: DiscountType[];
  spec?: {
    wifi: boolean;
    shower: boolean;
    parking: boolean;
  };
  contact?: ContactType;
}
export interface TimetableType {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface PriceType {
  onetime?: number;
  oneMonth: number;
  threeMonth?: number;
  sixMonth?: number;
  year?: number;
}

export interface DiscountType {
  name: string;
  discount: number;
}

export interface ContactType {
  phonenumber?: number;
  social?: string[];
}

export interface FitnessProp {
  data: FitnessType;
}

export interface AllFitnessProp {
  data: FitnessType[];
}

// export interface SpecType {}
