import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreatePassengerDto } from './dto/create-passengers.dto';
import { PassengersService } from './passengers.service';

@Controller('passengers')
export class UsersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Post()
  create(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengersService.create(createPassengerDto);
  }

  @Get()
  async findAll() {
    return await this.passengersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengersService.remove(+id);
  }
}
