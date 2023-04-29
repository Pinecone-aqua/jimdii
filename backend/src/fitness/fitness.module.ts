import { Module } from '@nestjs/common';
import { FitnessController } from './fitness.controller';
import { FitnessService } from './fitness.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FitnessSchema } from './fitness.model';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'fitness', schema: FitnessSchema }]),
    CloudinaryModule,
  ],

  controllers: [FitnessController],
  providers: [FitnessService],
})
export class FitnessModule {}
