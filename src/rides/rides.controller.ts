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

@Controller('rides')
export class RideController {
  constructor(private readonly ridesService: RidesService) {}

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
  @Get()
  async findAll() {
    return await this.ridesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ridesService.findOne(+id);
  }
  @Post(':id/stop')
  @HttpCode(200)
  stopCurrentRide(@Param('id') id: string) {
    return this.ridesService.stopRide(id);
  }
  @Get(':id/ongoing')
  @HttpCode(200)
  ongoingRides() {
    return this.ridesService.ongoingRides();
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ridesService.remove(Number(id));
  }
}
