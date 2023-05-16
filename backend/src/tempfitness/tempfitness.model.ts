import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class tempFitness {
  @Prop({ type: String })
  name: string;
  @Prop({ type: String })
  description: string;
  @Prop({ type: Array })
  image: string[];
  @Prop({ type: Object })
  price: {
    oneMonth: number;
    threeMonth: number;
    onetime: number;
    year: number;
  };
  @Prop({ type: Object })
  address: {
    district: string;
    description: string;
    coord: number[];
  };
  @Prop({ type: Object })
  timetable: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  @Prop({ type: Array })
  discount: [{ name: string; discount: number }];
  @Prop({ type: Object })
  spec: {
    wifi: boolean;
    shower: boolean;
    parking: boolean;
  };
  @Prop({ type: Object })
  contact: {
    phone_number: number;
    social: string[];
  };
}

export const tempFitnessSchema = SchemaFactory.createForClass(tempFitness);
