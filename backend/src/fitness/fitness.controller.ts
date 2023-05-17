import { FitnessService } from './fitness.service';
import {
  Controller,
  Get,
  Delete,
  Param,
  Body,
  Post,
  UseInterceptors,
  ParseFilePipe,
  UploadedFiles,
  BadRequestException,
  Query,
  HttpException,
  HttpStatus,
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

  @Get('getAllFitness')
  async getAllfitness(@Query() query) {
    const result = await this.fitnessService.getAllfitness(query);

    if (result[0]) {
      return result;
    } else {
      throw new HttpException('No fitness found', HttpStatus.NO_CONTENT);
    }
  }

  @Get('limitedFitness:limit')
  async getSomeFitness(@Param('limit') limit: string) {
    try {
      const num = Number(limit);
      const result = await this.fitnessService.getSomeFitness(num);
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
  async getPages(@Query() query: { category: string; search: string }) {
    try {
      const { category, search } = query;
      const result = this.fitnessService.getPages(category, search);
      return result;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
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

      const result = await this.fitnessService.addToCloudinary(files.image);
      return await this.fitnessService.addFitness(req, result);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
