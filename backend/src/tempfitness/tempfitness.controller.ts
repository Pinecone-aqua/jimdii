import { tempFitnessService } from './tempfitness.service';
import {
  Controller,
  Body,
  Post,
  UseInterceptors,
  ParseFilePipe,
  UploadedFiles,
  BadRequestException,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('tempfitness')
export class tempFitnessController {
  constructor(private readonly fitnessService: tempFitnessService) {}

  @Post('addtempFitness')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image' }]))
  async fileUpload(
    @Body() body: { body: string },
    @UploadedFiles(new ParseFilePipe())
    files: {
      image?: Express.Multer.File[];
    },
  ) {
    try {
      const res = JSON.parse(body.body);

      const image = await this.fitnessService.addToCloudinary(files.image);
      if (image.length === files.image.length) {
        return await this.fitnessService.addTempFitness(res, image);
      }
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
