import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Membership } from './membership.model';

@Injectable()
export class MembershipService {
  constructor(
    @InjectModel(Membership.name) private membershipModel: Model<Membership>,
  ) {}

  async createMembership(membership: Membership) {
    const newMembership = new this.membershipModel(membership);
    const result = await newMembership.save();
    return result;
  }
}
