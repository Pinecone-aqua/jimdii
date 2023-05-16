import { tempFitnessService } from './tempfitness.service';
import {
  Controller,
  Body,
  Post,
  UseInterceptors,
  ParseFilePipe,
  UploadedFiles,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('fitness')
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
      const req = JSON.parse(body.body);
      console.log(files.image[0].buffer);
      console.log('body', req.name);

      const result = await this.fitnessService.addToCloudinary(
        files.image,
        files.image.length,
      );
      if (result.length === files.image.length) console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
}
