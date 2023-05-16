import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private readonly userModel: Model<User>) {}

  async getUsers() {
    return await this.userModel.find({}).sort({ role: 1 });
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async createUser(user: User) {
    const newUser = new this.userModel(user);
    const result = await newUser.save();
    return result;
  }

  async getUserById(_id: string) {
    return await this.userModel.findOne({ _id });
  }

  async updateUser(_id: string, user) {
    return await this.userModel.findOneAndUpdate({ _id }, { ...user });
  }

  async removeUser(_id: string) {
    return await this.userModel.deleteOne({ _id });
  }

  async checkUser(query) {
    const { email, password } = JSON.parse(query.user);
    if (!(email || password)) return 'email or password is missing';

    const user = await this.userModel.findOne({ email: email });

    if (!user) return 'This user is not registered please register';

    if (await bcrypt.compare(password, user.password)) {
      const result = { username: user.username, _id: user._id };
      return result;
    }

    return 'password is wrong';
  }

  async addUser(user) {
    const checkUser = await this.userModel.findOne({ email: user.email });
    if (checkUser) return 'Your email is already registered';

    user.password = await bcrypt.hash(user.password, 10);
    user = { ...user, created_date: moment().format('LLLL') };

    await this.userModel.create(user);

    return 'succeed';
  }

  async editUser(newUser) {
    const user = this.userModel.find({ _id: newUser._id });
    return user;
  }
}
