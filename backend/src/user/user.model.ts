import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  username: string;
  @Prop({ type: String })
  profileImage?: string;

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

  @Prop({ type: String })
  birthdate?: string;

  @Prop({ type: String })
  createdDate: string;

  @Prop({ default: 'CLIENT' })
  role: 'CLIENT' | 'MODERATOR' | 'ADMIN';
}

export class UpdateUserInput extends User {
  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
