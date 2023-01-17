import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { DatabaseModule } from './config/database.module';

import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { PassengersModule } from './passengers/passengers.module';
import { PassengersController } from './passengers/passengers.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    PassengersModule,
    DriversModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
