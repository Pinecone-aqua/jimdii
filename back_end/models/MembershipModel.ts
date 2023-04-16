import { model, Schema } from "mongoose";

type DiscountType = {
  start: Date;
  end: Date;
  discountAmount: string;
};

interface MembershipType {
  _id: string;
  fitness_id: string;
  user_id: string;
  active: boolean;
  payment_type: string;
  price: string;
  discount: DiscountType;
  start_at: Date;
  expires_at: Date;
}

const MembershipSchema = new Schema<MembershipType>(
  {
    _id: Schema.Types.ObjectId,
    fitness_id: String,
    user_id: String,
    active: Boolean,
    payment_type: String,
    price: String,
    discount: Object,
    start_at: Date,
    expires_at: Date,
  },
  { collection: "Membership" }
);

const Membership = model<MembershipType>("Membership", MembershipSchema);
// Membership.collection.createIndex({ "address.coord": "2dsphere" });

export default Membership;
