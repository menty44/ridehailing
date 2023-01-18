import { Test, TestingModule } from '@nestjs/testing';
import { DriversController } from './rides.controller';
import { RidesService } from './rides.service';

describe('RideController', () => {
  let controller: DriversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriversController],
      providers: [RidesService],
    }).compile();

    controller = module.get<DriversController>(DriversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
