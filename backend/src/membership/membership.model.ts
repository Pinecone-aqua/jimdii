import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Membership {
  @Prop({ type: mongoose.Schema.Types.String, ref: 'fitness' })
  fitnessId: string;
  @Prop()
  userId: string;
  @Prop({ default: false })
  isPayment: boolean;
  @Prop()
  price: number;
  @Prop({ type: Object })
  discount: {
    name: string;
    discount: number;
  };
  @Prop()
  startDate: string;
  @Prop()
  expireDate: string;
}

export const MembershipSchema = SchemaFactory.createForClass(Membership);
