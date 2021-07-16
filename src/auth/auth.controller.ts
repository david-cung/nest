import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  // @Post('signin')
  // // @UseGuards(AuthGuard('local'))
  // signin(@Req() req: Request) {
  //   const user = req.user;
  //   const accessToken = this.jwtService.sign(user);
  //   return { accessToken };
  // }
}