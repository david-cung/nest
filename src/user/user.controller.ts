import { Controller, Post, Body, Get, Query, UseGuards, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UserService } from './user.service';
import { PassportModule } from '@nestjs/passport';
import { AuthGuard } from '@nestjs/passport';
import { query } from 'express';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) { };

    @Post('/create')
    async create(@Body() createUser: CreateUserDto) {
        console.log("createUser", createUser);
        const arrayUser = this.userService.createUser(createUser);
        return arrayUser;
    }

    @Get()
    async getAllUser() {
        const result = await this.userService.getUser();
        return result
    }

    @Get(":id")
    async getById(@Param() id) {
       return await this.userService.getById(id);
    }

    /**
     * delete user by id
     */
    @Delete(":id")
    async deleteById(@Param() id) {
        return await this.userService.deleteById(id);
    }
}
