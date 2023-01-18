import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Ride from './entities/ride.entity';
import { RideController } from './rides.controller';
import { RidesService } from './rides.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ride])],
  controllers: [RideController],
  providers: [RidesService],
})
export class RidesModule {}
