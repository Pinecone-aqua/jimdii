import { FitnessService } from './fitness.service';
import {
  Controller,
  Get,
  Query,
  Delete,
  Param,
  Patch,
  Body,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('fitness')
export class FitnessController {
  constructor(
    private readonly fitnessService: FitnessService,
    private readonly cloudinary: CloudinaryService,
  ) {}
  @Get('getfitness')
  async getFitness(@Query() query) {
    try {
      const result = await this.fitnessService.getFitness(query);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  @Get('getAllFitness')
  async getAllfitness() {
    try {
      const result = await this.fitnessService.getAllfitness();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  @Delete(':_id')
  async deleteFitness(@Param('_id') _id: string) {
    const result = await this.fitnessService.deleteFitness(_id);
    return result;
  }
  @Patch(':_id')
  async updateProduct(@Param('_id') id: string, @Body() updateFitnessInput) {
    const result = await this.fitnessService.updateFitness(
      id,
      updateFitnessInput,
    );
    return result;
  }
  @Post('test')
  @UseInterceptors(FileInterceptor('file'))
  async fileUpload(
    @UploadedFile(new ParseFilePipe({}))
    file: Express.Multer.File,
  ) {
    console.log(file);
    if (file)
      await this.cloudinary.uploadImage(file).catch(() => {
        throw new BadRequestException('Invalid file type.');
      });
    return 'ok';
  }
}
