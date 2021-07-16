import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport";
import { UserService } from './user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {    
    constructor(private readonly authService: UserService) {
        super();
    }
    async login(userParam: any) {
        console.log("localllllllll");
        
        // const userInDB = this.authService.findOne(userParam);
        // if (!userInDB) {
        //     throw new UnauthorizedException('sign faild');
        // }
        return "userInDB";
    }
}
