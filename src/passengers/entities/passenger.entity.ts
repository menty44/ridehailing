import { boolean } from 'joi';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Passenger {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column()
    public name: string;
  
    @Column()
    public phonenumber: string;
}
