import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

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

  @Post(':id/suspend')
  @HttpCode(204)
  suspend(@Param('id') id: string) {
    return this.driversService.suspendDriver(id);
  }

  @Delete(':id/suspend')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.driversService.deleteSuspendedDriver(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driversService.remove(+id);
  }
}
