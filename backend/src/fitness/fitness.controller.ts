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
  BadRequestException,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('fitness')
export class FitnessController {
  constructor(private readonly fitnessService: FitnessService) {}

  @Get('getfitness:id')
  async getFitness(@Param('id') id: string) {
    try {
      const result = await this.fitnessService.getFitness(id);
      return result;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Get('getAllFitness:page')
  async getAllfitness(@Param('page') page: string) {
    try {
      const result = await this.fitnessService.getAllfitness(page);
      return result;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Get('limitedFitness:limit')
  async getSomeFitness(@Param('limit') limit: string) {
    try {
      const num = Number(limit);
      console.log(num);
      const result = await this.fitnessService.getSomeFitness(num);
      console.log(result.length);

      if (result) {
        if (result[0]) return result;
        return { message: 'no more data to fetch' };
      }
      throw new BadRequestException('something went wrong');
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Get('id')
  async getAllId() {
    return this.fitnessService.getAllId();
  }

  @Get('pages')
  async getPages() {
    const result = this.fitnessService.getPages();
    return result;
  }

  @Delete('delete:id')
  async deleteFitness(@Param('id') id: string) {
    const result = await this.fitnessService.deleteFitness(id);
    return result;
  }

  // @Patch(':_id')
  // async updateProduct(@Param('_id') id: string, @Body() updateFitnessInput) {
  //   const result = await this.fitnessService.updateFitness(
  //     id,
  //     updateFitnessInput,
  //   );
  //   return result;
  // }

  @Post('addFitness')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image' }]))
  async fileUpload(
    @Body() body: { body: string },
    @UploadedFiles(new ParseFilePipe())
    files: {
      image?: Express.Multer.File[];
    },
  ) {
    try {
      const req = JSON.parse(body.body);
      console.log(files.image[0].buffer);
      console.log('body', req.name);

      const result = await this.fitnessService.addToCloudinary(
        files.image,
        files.image.length,
      );
      if (result.length === files.image.length) console.log(result);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
