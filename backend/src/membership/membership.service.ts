import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Membership } from './membership.model';
import * as moment from 'moment';
import { Fitness } from 'src/fitness/fitness.model';

@Injectable()
export class MembershipService {
  constructor(
    @InjectModel(Membership.name)
    private readonly membershipModel: Model<Membership>,
  ) {}

  async getMembership(id: string) {
    const result = await this.membershipModel
      .find({ userId: id })
      .populate('fitnessId', 'name')
      .select({ startDate: 1, expireDate: 1 });
    console.log(result);

    return result;
  }

  async createMembership(membership: Membership, id: string) {
    const priceDuration = [
      ['onetime', 1],
      ['oneMonth', 30],
      ['threeMonth', 90],
      ['sixMonth', 180],
      ['year', 360],
    ];

    const { fitnessId, price, discount } = membership;

    const startDate = moment().format('YYYY-MM-DD');
    const [duration] = priceDuration.filter((single) => single[0] === price[0]);
    const expireDate = moment().add(duration[1], 'days').format('YYYY-MM-DD');

    const newMembership = new this.membershipModel({
      fitnessId,
      price: price[1],
      discount,
      userId: id,
      startDate,
      expireDate,
    });
    const result = await newMembership.save();
    return result;
  }
}
