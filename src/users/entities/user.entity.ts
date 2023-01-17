import { boolean } from 'joi';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Passenger {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column()
    public email: string;
  
    @Column()
    public password: string;
}
