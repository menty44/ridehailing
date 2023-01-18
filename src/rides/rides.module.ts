import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Ride from './entities/ride.entity';
import { RideController } from './rides.controller';
import { RidesService } from './rides.service';
import Passenger from '../passengers/entities/passenger.entity';
import Driver from '../drivers/entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ride, Passenger, Driver])],
  controllers: [RideController],
  providers: [RidesService],
})
export class RidesModule {}
