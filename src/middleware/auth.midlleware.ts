import { Injectable, NestMiddleware, Query } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(@Query() queryClient, res: Response, next: NextFunction) {
    console.log("query");
    next();
  }
}
