import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FitnessModule } from './fitness/fitness.module';
import { MembershipModule } from './membership/membership.module';
import { GoogleLoginModule } from './google-login/google-login.module';
import { CheckToken } from './middleware/checkToken';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGOOSE_CONNECT_KEY}@cluster0.drwdfkp.mongodb.net/Fitness`,
    ),
    UserModule,
    FitnessModule,
    MembershipModule,
    GoogleLoginModule,
  ],
  controllers: [],
  providers: [CheckToken],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckToken).forRoutes('membership', 'user/editMyDetail');
  }
}
