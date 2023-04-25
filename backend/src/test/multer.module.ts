import { MulterModule } from '@nestjs/platform-express';

MulterModule.registerAsync({
  useFactory: () => ({
    dest: './tmp',
  }),
});
