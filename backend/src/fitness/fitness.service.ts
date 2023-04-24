import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fitness } from './fitness.model';

@Injectable()
export class FitnessService {
  constructor(
    @InjectModel('fitness') private readonly fitnessModel: Model<Fitness>,
  ) {}
  async addFitness(fitness) {
    await this.fitnessModel.create(fitness);
    console.log(fitness);
    return 'Successfully created';
  }

  async editFitness(newFitness) {
    console.log(newFitness);
    const fitness = this.fitnessModel.find({ _id: newFitness._id });
    console.log(fitness);
    return 'Successfully edited';
  }
   async getFitness(_id: string): Promise<any> {
    const fitness = await this.fitnessModel.findOne({_id}).limit(1);
    return fitness;
  }
  async getAllfitness(): Promise<any> {
    const allFitness = await this.fitnessModel.find({});
    return allFitness;
  }
  async deleteFitness(_id: string): Promise<any> {
    return await this.fitnessModel.deleteOne({_id});
  }
  
}
