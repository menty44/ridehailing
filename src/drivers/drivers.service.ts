import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import Driver from './entities/driver.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver) 
    private driverRepository: Repository<Driver>,
  ) {}
  
  async create(createDriverDto: CreateDriverDto) {
    const newDriver = await this.driverRepository.create(createDriverDto);
    await this.driverRepository.save(newDriver);

    return newDriver;
  }

  /**
  find by all
  */
  findAll() {
    return this.driverRepository.find();
  }

  /**
  find by @id
  */
  async findOne(id) {
    const driver = await this.driverRepository.findOne(id);
    if (driver) {
      return driver;
    }

    throw new HttpException('Driver not found', HttpStatus.NOT_FOUND);
  }

  /**
  find by @id
  */
  async suspend(id) {
    const driver = await this.driverRepository.findOne({where: {id: id}});
    console.log(JSON.stringify(driver));
    if (driver) {
      driver.suspended = true;
      let updatedDriver = await this.driverRepository.save(driver);
      return updatedDriver;
    }
   

    throw new HttpException('Driver not found', HttpStatus.NOT_FOUND);
  }

  // async update(id: number, updateDriverDto: UpdateDriverDto) {
  //  let data = await this.driverRepository.update(id, updateDriverDto);
  //   const updatedDriver = await this.driverRepository.findOne(id);
  //   if (updatedDriver) {
  //     return updatedDriver;
  //   }

  //   throw new HttpException('Driver not found', HttpStatus.NOT_FOUND);
  // }

  /**
  delete by @id
  */
  async remove(id: number) {
    const deletedDriver = await this.driverRepository.delete(id);
    if (!deletedDriver.affected) {
      throw new HttpException('Driver not found', HttpStatus.NOT_FOUND);
    }
  }
}
