import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Membership {
  @Prop({ type: String })
  fitness_id: string;
  @Prop()
  user_id: string;
  @Prop()
  isPayment: boolean;
  @Prop()
  price: number;
  @Prop()
  discount: {
    name: string;
    discount: number;
  };
  @Prop()
  start_date: string;
  @Prop()
  expire_date: string;
}

export const MembershipSchema = SchemaFactory.createForClass(Membership);
