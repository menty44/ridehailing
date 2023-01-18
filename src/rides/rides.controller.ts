import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { RidesService } from './rides.service';
import { CreateDriverDto } from "../drivers/dto/create-driver.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('rides')
export class RideController {
  constructor(private readonly ridesService: RidesService) {}
  @UseGuards(JwtAuthGuard)
  @Post(':passengerid/:driverid')
  create(
    @Param('passengerid') passengerid: number,
    @Param('driverid') driverid: number,
    @Body() data: any,
  ) {
    console.log(passengerid);
    console.log(driverid);
    console.log(`passengerid ${typeof passengerid}`);
    console.log(`driverid ${typeof driverid}`);
    console.log(data);
    return this.ridesService.create(+passengerid, +driverid, data);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.ridesService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ridesService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Post(':id/stop')
  @HttpCode(200)
  stopCurrentRide(@Param('id') id: string) {
    return this.ridesService.stopRide(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id/ongoing')
  @HttpCode(200)
  ongoingRides() {
    return this.ridesService.ongoingRides();
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ridesService.remove(Number(id));
  }
}
