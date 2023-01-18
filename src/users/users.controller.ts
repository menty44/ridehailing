import { UsersService } from './users.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    //  // login route
    //  @Post('login')
    //  // find the user based on the input data
    //  async login(@Body() userDTO: CreateUserDto) {
    //      const user = await this.userService.findByLogin(userDTO);
    //      // define a payload
    //      const payload = {
    //          email: user.email,
    //      }
    //      //get a JWT authentication token from the payload
    //      const token = await this.userService.signPayload(payload);
    //      // return the user and the token
    //      return {
    //          user, token
    //      }
    //  }
 
    //  // registration route
    //  @Post('register')
    //  async register(@Body() userDTO: CreateUserDto) {
    //      // Create user based on the input data
    //      const user = await this.userService.create(userDTO);
    //      // define a payload
    //      const payload = {
    //          email: user.email,
    //      }
    //      // get a JWT authentication token from the payload
    //      const token = await this.userService.signPayload(payload);
    //      // return the user and the token
    //      return { user, token }
    //  }
}
