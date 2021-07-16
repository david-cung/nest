import { Injectable, HttpException } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { User, UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

// type User: any;
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<UserDocument>) { }

    async getUser() {
        const allUser = await this.userModel.find().exec();
        if (!allUser || !allUser[0]) {
            throw new HttpException('Not found', 404);
        }
        return allUser;
    }
    /**
     * create a new user
     * @param newUser : info of user
     * @returns 
     */
    async createUser(newUser) {
        const user = await new this.userModel(newUser);
        return user.save();
    }

    /**
     * get a user by id
     */
    async getById(id) {
        const user = await this.userModel.findById({ _id: id.id }).exec();
        if (!user) {
            throw new HttpException('Not found', 404);
        }
        return user;
    }

    /**
     * delete a user by id
     */
    async deleteById(id) {
        const deleteUser = await this.userModel.deleteOne({ _id: id.id }).exec();
        if (!deleteUser) {
            throw new HttpException('Not found', 404);
        }
        return deleteUser;
    }
}
