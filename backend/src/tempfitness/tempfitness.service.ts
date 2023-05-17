import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { tempFitness } from './tempfitness.model';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class tempFitnessService {
  constructor(
    @InjectModel('tempfitness')
    private readonly fitnessModel: Model<tempFitness>,
    private readonly cloudinary: CloudinaryService,
  ) {}

  async addToCloudinary(files): Promise<any> {
    const arr = [];
    await Promise.all(
      await files?.map(async (file) => {
        const { secure_url } = await this.cloudinary.uploadImage(file);
        return arr.push(secure_url);
      }),
    );

    return arr;
  }
  async addTempFitness(body, image): Promise<any> {
    const newfitness = new this.fitnessModel({ ...body, image });
    newfitness.save();
    return 'Successfully created';
  }
}
