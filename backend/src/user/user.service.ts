import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private readonly userModel: Model<User>) {}

  async checkUser(query) {
    const { email, password } = query;
    if (!(email || password)) return 'email or password is missing';

    const user = await this.userModel.findOne({ email: email });

    if (!user) return 'This user is not registered please register';

    if (await bcrypt.compare(user.password, password)) {
    }

    return user;
  }

  async addUser(user) {
    const checkUser = await this.userModel.findOne({ email: user.email });
    if (checkUser) return 'Your email is already registered';

    user.password = await bcrypt.hash(user.password, 10);
    user = { ...user, created_date: moment().format('LLLL') };

    await this.userModel.create(user);
    console.log(user);

    return 'succeed';
  }

  async editUser(newUser) {
    console.log(newUser);
    const user = this.userModel.find({ _id: newUser._id });
    console.log(user);
    return 'changed succeedfully';
  }
}
