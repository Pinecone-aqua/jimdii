import { Module } from '@nestjs/common';
import { tempFitnessController } from './tempfitness.controller';
import { tempFitnessService } from './tempfitness.service';
import { MongooseModule } from '@nestjs/mongoose';
import { tempFitnessSchema } from './tempfitness.model';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'fitness', schema: tempFitnessSchema }]),
    CloudinaryModule,
  ],

  controllers: [tempFitnessController],
  providers: [tempFitnessService],
})
export class tempFitnessModule {}
