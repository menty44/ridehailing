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
import { AuthGuard } from "@nestjs/passport";

@Controller('passengers')
export class UsersController {
  constructor(private readonly passengersService: PassengersService) {}
  @UseGuards(AuthGuard('local'))
  @Post()
  create(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengersService.create(createPassengerDto);
  }
  @UseGuards(AuthGuard('local'))
  @Get()
  async findAll() {
    return await this.passengersService.findAll();
  }
  @UseGuards(AuthGuard('local'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengersService.findOne(+id);
  }
  @UseGuards(AuthGuard('local'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengersService.remove(+id);
  }
}
