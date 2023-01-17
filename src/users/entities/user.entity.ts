import { boolean } from 'joi';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class User {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column()
    public email: string;
  
    @Column()
    public password: string;
}
