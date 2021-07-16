import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        // private jwtService: JwtService
      ) {}
    
    async login(user: any) {
        const userInDB = this.userService.getUser();
        // if (userInDB && (await userInDB).password === user.password) {
        //     // const payload = { username: user.username };
        //     return user;
        // }
        // return null;
    }
    // async login(user: any) {
    //     console.log("login", user);
        
    //     const payload = { username: user.username, sub: user.userId };
    //     return {
    //       access_token: this.jwtService.sign(payload),
    //     };
    //   }
}
