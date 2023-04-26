import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File) {
    const upload = v2.uploader.upload_stream((error, result) => {
      console.log(result.secure_url);
      if (result) return result;
      return error;
    });
    const result = await toStream(file.buffer).pipe(upload);
    return await result;
  }
}
