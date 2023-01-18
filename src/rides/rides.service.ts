import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateRideDto } from './dto/create-ride.dto';
import Ride from './entities/ride.entity';
import Driver from './entities/ride.entity';

@Injectable()
export class RidesService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,
  ) {}
  async create(createDriverDto: CreateRideDto) {
    const newDriver = await this.rideRepository.create(createDriverDto);
    await this.rideRepository.save(newDriver);

    return newDriver;
  }

  /**
  find by all
  */
  findAll() {
    return this.rideRepository.find();
  }

  /**
  find by @id
  */
  async findOne(id) {
    const ride = await this.rideRepository.findOne({ where: { id: id } });
    if (ride) {
      return ride;
    }

    throw new HttpException('Ride not found', HttpStatus.NOT_FOUND);
  }

  /**
  stopRide by @id
  */
  async stopRide(id) {
    const ride = await this.rideRepository.findOne({ where: { id: id } });
    if (ride) {
      ride.ridestatus = 'done';
      return await this.rideRepository.save(ride);
    }

    throw new HttpException('Ride not found', HttpStatus.NOT_FOUND);
  }

  /**
  stopRide by @id
  */
  async ongoingRides() {
    return await this.rideRepository.find({ where: { ridestatus: 'ongoing' } });
  }

  /**
  delete by @id
  */
  async remove(id: number) {
    const deletedRide = await this.rideRepository.delete(id);
    if (!deletedRide.affected) {
      throw new HttpException('Ride not found', HttpStatus.NOT_FOUND);
    }
  }
}
