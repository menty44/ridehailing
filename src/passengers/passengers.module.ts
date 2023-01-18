import { Module } from '@nestjs/common';
import { UsersController } from './passengers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Passenger from './entities/passenger.entity';
import { PassengersService } from './passengers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Passenger])],
  controllers: [UsersController],
  providers: [PassengersService],
})
export class PassengersModule {}
