import { UsersService } from './users.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    login(@Body() createUserDto: CreateUserDto) {
        return this.usersService.login();
    }

}
