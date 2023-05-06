import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// export interface UserType {
//   _id: string;
//   profile_img?: string;
//   username: {
//     firstname: string;
//     lastname: string;
//   };
//   phone?: number;
//   email: string;
//   password: string;
//   address?: {
//     coord: number[];
//   };
//   gender?: 'male' | 'female' | 'other';
//   type: 'client' | 'admin';
//   fitness_id?: string;
//   birth_date?: string;
//   created_date: string;
// }
@Schema()
export class User {
  @Prop({ type: Object })
  username: {
    firstname: string;
    lastname: string;
  };
  @Prop({ type: String })
  profile_img?: string;

  @Prop({ type: Number })
  phone?: number;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: Object })
  address?: {
    coord: number[];
  };

  @Prop({ type: String })
  gender: string;

  // @Prop({ type: String, default: 'client' })
  // type: string;

  // @Prop({ type: String })
  // fitness_id?: string;

  @Prop({ type: String })
  birth_date?: string;

  @Prop({ type: String })
  created_date: string;

  @Prop({ default: 'CLIENT' })
  role: 'CLIENT' | 'MODERATOR' | 'ADMIN';
}

export class UpdateUserInput extends User {
  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
