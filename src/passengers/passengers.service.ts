import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreatePassengerDto } from './dto/create-passengers.dto';
import Passenger from './entities/passenger.entity';

@Injectable()
export class PassengersService {
  constructor(
    @InjectRepository(Passenger) 
    private passengerRepository: Repository<Passenger>,
  ) {}
  
  async create(createPassengerDto: CreatePassengerDto) {
    const newPassenger = await this.passengerRepository.create(createPassengerDto);
    await this.passengerRepository.save(newPassenger);

    return newPassenger;
  }

  /**
  find by all
  */
  findAll() {
    return this.passengerRepository.find();
  }

  /**
  find by @id
  */
  async findOne(id) {
    const passenger = await this.passengerRepository.findOne({where: {id: id}});
    if (passenger) {
      return passenger;
    }

    throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
  }

  /**
  find by @id
  */
  // async suspendPassenger(id) {
  //   const passenger = await this.passengerRepository.findOne({where: {id: id}});
  //   if (passenger) {
  //     passenger.suspended = true;
  //     let updatedPassenger = await this.passengerRepository.save(passenger);
  //     return updatedPassenger;
  //   }
   
  //   throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
  // }

  // async deleteSuspendedPassenger(id) {
  //   console.log(id)
  //   let deletedPassenger = await this.passengerRepository
  //     .createQueryBuilder("passenger")
  //     .delete()
  //     .from(Passenger)
  //     .where("id= :id", {id: id})
  //     // .andWhere("suspended= :suspended", {suspended: true})
  //     .execute();
  //     if(deletedPassenger.affected === 1) {
  //       return {message: "Passenger deleted successfully"}
  //     }

  //   throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
  // }

  /**
  delete by @id
  */
  async remove(id: number) {
    const deletedPassenger = await this.passengerRepository.delete(id);
    if (!deletedPassenger.affected) {
      throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
    }
  }
}
