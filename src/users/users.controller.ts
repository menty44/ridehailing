import { UsersService } from './users.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
}
