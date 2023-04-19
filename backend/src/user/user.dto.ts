export class CreateUserDto {
  username: {
    firstname: string;
    lastname: string;
  };
  email: string;
  password: string;
  gender: 'male' | 'female' | 'other';
}
