import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FitnessModule } from './fitness/fitness.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGOOSE_CONNECT_KEY}@cluster0.drwdfkp.mongodb.net/Fitness`,
    ),
    UserModule,
    FitnessModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
