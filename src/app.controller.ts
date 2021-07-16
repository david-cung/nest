import { Controller, Get, Post, UseGuards , Request, Body} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalStrategy } from './auth/local.strategy';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private authService: AuthService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
