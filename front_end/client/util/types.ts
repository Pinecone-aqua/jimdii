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
