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
  ParseFilePipe,
  UploadedFiles,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('fitness')
export class FitnessController {
  constructor(private readonly fitnessService: FitnessService) {}
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
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 5 }]))
  async fileUpload(
    @Body() body: { body: string },
    @UploadedFiles(new ParseFilePipe())
    files: {
      image?: Express.Multer.File[];
    },
  ) {
    console.log(files.image[0].buffer);
    console.log('body', JSON.parse(body.body).name);

    const result = await this.fitnessService.createNewFitness(
      files.image,
      files.image.length,
    );
    if (result[0]) console.log(result);
  }
}
