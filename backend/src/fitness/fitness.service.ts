import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fitness } from './fitness.model';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class FitnessService {
  constructor(
    @InjectModel('fitness') private readonly fitnessModel: Model<Fitness>,
    private readonly cloudinary: CloudinaryService,
  ) {}

  async getFitness(_id: string): Promise<any> {
    const fitness = await this.fitnessModel.findOne({ _id });
    return fitness;
  }

  async getSomeFitness(num: number) {
    return await this.fitnessModel
      .find()
      .skip(num)
      .limit(4)
      .select({ name: 1, _id: 1, image: 1, price: 1 });
  }

  async getAllfitness(page: string): Promise<any> {
    const num = Number(page);
    const allFitness = await this.fitnessModel
      .find({})
      .select({ _id: 1, name: 1, image: 1, price: 1 })
      .skip((num - 1) * 10)
      .limit(10);
    return allFitness;
  }

  async getAllId(): Promise<any> {
    return await this.fitnessModel.find().select({ _id: 1 });
  }

  async getPages(): Promise<any> {
    const pages = [];
    const result = await this.fitnessModel.find();
    for (let i = 1; i <= Math.ceil(result.length / 10); i++) {
      pages.push(i.toString());
    }
    return pages;
  }

  async deleteFitness(_id: string): Promise<any> {
    const result = await this.fitnessModel.deleteOne({ _id });
    return result;
  }

  // async updateFitness(_id: string, updateFitnessInput: Fitness): Promise<any> {
  //   const fitness = await this.fitnessModel.findByIdAndUpdate(
  //     _id,
  //     updateFitnessInput,
  //   );
  //   return fitness;
  // }

  async addToCloudinary(files, i: number): Promise<any> {
    console.log(i);

    const arr = [];
    await Promise.all(
      await files?.map(async (file) => {
        const { secure_url } = await this.cloudinary.uploadImage(file);
        return arr.push(secure_url);
      }),
    );

    return arr;
  }
}
