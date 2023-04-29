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
  name: string;
  description: string;
  image: string[];
  price: {
    oneMonth: number;
    threeMonth?: number;
    onetime?: number;
    year?: number;
  };
  address: {
    district:
      | 'Bayangol'
      | 'Sukhbaatar'
      | 'Khan-uul'
      | 'Songino-Khairkhan'
      | 'Bayanzurkh'
      | 'Chingeltei'
      | 'Baganuur';
    description: string;
    coord?: number[];
  };
  timetable: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  discount?: [
    { name: string; discount: number },
    { name: string; discount: number },
    { name: string; discount: number },
  ];
  spec: {
    wifi: boolean;
    shower: boolean;
    parking: boolean;
  };
  contact: {
    phone_number: number;
    social?: string[];
  };
}