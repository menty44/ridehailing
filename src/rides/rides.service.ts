import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateRideDto } from './dto/create-ride.dto';
import Ride from './entities/ride.entity';
import Driver from './entities/ride.entity';
import Passenger from "../passengers/entities/passenger.entity";

@Injectable()
export class RidesService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,
    @InjectRepository(Passenger)
    private passengerRepository: Repository<Passenger>,
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ) {}
  async create(passenderid, driverid, data) {
    // "passengerid": 13,
    //   "driverid": 14,
    //   "ridestatus": "ongoing",
    const passenger = await this.passengerRepository.findOne({
      where: { id: passenderid },
    });

    const driver = await this.passengerRepository.findOne({
      where: { id: driverid },
    });


    if (passenger !== null || passenger !== undefined && driver !== null || driver !== undefined) {
      const newDriver = await this.driverRepository.create({
        passengerid: passenger.id,
        driverid: driverid.id,
        ridestatus: 'ongoing',
        pickup: data.pickup,
        destination: data.destination,
      });
      await this.rideRepository.save(newDriver);

      return newDriver;
    }

    throw new HttpException('Ride not found', HttpStatus.NOT_FOUND);
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
