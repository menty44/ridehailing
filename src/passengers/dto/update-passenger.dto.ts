import { PartialType } from '@nestjs/mapped-types';
import { CreatePassengerDto } from './create-passengers.dto';

export class UpdateDriverDto extends PartialType(CreatePassengerDto) {}
