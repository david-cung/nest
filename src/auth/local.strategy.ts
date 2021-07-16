import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport";
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {    
    constructor(private readonly authService: AuthService) {
        super();
    }
    async login(userParam: any) {
        console.log("localllllllll");
        
        const userInDB = this.authService.login(userParam);
        if (!userInDB) {
            throw new UnauthorizedException('sign faild');
        }
        return userInDB;
    }
}
