import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Membership {
  @Prop({ type: String })
  fitnessId: string;
  @Prop()
  userId: string;
  @Prop()
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
