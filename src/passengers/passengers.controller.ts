import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode, UseGuards
} from "@nestjs/common";
import { CreatePassengerDto } from './dto/create-passengers.dto';
import { PassengersService } from './passengers.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('passengers')
export class UsersController {
  constructor(private readonly passengersService: PassengersService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengersService.create(createPassengerDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.passengersService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengersService.findOne(+id);
  }
   @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengersService.remove(+id);
  }
}
