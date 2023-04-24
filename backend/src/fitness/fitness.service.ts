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
   async getFitness(name: string): Promise<any> {
    const fitness = await this.fitnessModel.findOne({name}).limit(1);
    return fitness;
  }
  async getAllfitness(): Promise<any> {
    const allFitness = await this.fitnessModel.find({});
    return allFitness;
  }
  async deleteFitness(_id: string): Promise<any> {
    const result = await this.fitnessModel.deleteOne({_id});
    return result;
  }

//   async createFitness(createFitnessInput: FitnessType): Promise<any>{
//     const fitness = new Fitness(FitnessType)
//     return await this.fitnessModel.create(fitness);
//   }
  async updateFitness (_id: string, updateFitnessInput: Fitness): Promise<any> {
    const fitness = await this.fitnessModel.findByIdAndUpdate(_id, updateFitnessInput);
    return fitness
  }
}
