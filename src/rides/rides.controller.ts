import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from "@nestjs/common";
import { CreateRideDto } from './dto/create-ride.dto';
import { RidesService } from './rides.service';
import { AuthGuard } from "@nestjs/passport";

@Controller('rides')
export class RideController {
  constructor(private readonly ridesService: RidesService) {}
  @UseGuards(AuthGuard('local'))
  @Post()
  create(@Body() rideDriverDto: CreateRideDto) {
    return this.ridesService.create(rideDriverDto);
  }
  @UseGuards(AuthGuard('local'))
  @Get()
  async findAll() {
    return await this.ridesService.findAll();
  }
  @UseGuards(AuthGuard('local'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ridesService.findOne(+id);
  }
  @UseGuards(AuthGuard('local'))
  @Post(':id/stop')
  @HttpCode(200)
  stopCurrentRide(@Param('id') id: string) {
    return this.ridesService.stopRide(id);
  }
  @UseGuards(AuthGuard('local'))
  @Get(':id/ongoing')
  @HttpCode(200)
  ongoingRides() {
    return this.ridesService.ongoingRides();
  }
  @UseGuards(AuthGuard('local'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ridesService.remove(+id);
  }
}
