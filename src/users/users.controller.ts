import { UsersService } from './users.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly driversService: UsersService) {}

    @Post()
    create(@Body() createDriverDto: CreateDriverDto) {
        return this.driversService.create(createDriverDto);
    }

    @Get()
    async findAll() {
    return await this.driversService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.driversService.findOne(+id);
    }

}
