import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { LogMiddleware } from './middleware/log.middleware'
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [OrderModule, UserModule, AuthModule,
    MongooseModule.forRoot('mongodb+srv://test:1234@cluster0.vklmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule  {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LogMiddleware)
  //     .forRoutes('user');
  //   consumer
  //     .apply()
  // }
}
