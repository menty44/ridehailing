import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from "@nestjs/common";
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AuthGuard } from "@nestjs/passport";

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driversService.create(createDriverDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.driversService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driversService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Post(':id/suspend')
  @HttpCode(204)
  suspend(@Param('id') id: string) {
    return this.driversService.suspendDriver(id);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id/suspend')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.driversService.deleteSuspendedDriver(id);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driversService.remove(+id);
  }
}
