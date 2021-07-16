import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthMiddleware } from 'src/middleware/auth.midlleware';
import { LogMiddleware } from 'src/middleware/log.middleware';
import { LocalStrategy } from 'src/auth/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
 import { User, UserSchema } from './schema/user.schema'


@Module({
  imports: [
    PassportModule,
    MongooseModule.forFeature([{name: "User" , schema: UserSchema}])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})

export class UserModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({path: '/user', method: RequestMethod.GET})
      .apply(LogMiddleware)
      .forRoutes({path: '/user', method: RequestMethod.POST})
  }
}
