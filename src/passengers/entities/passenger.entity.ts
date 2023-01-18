import { boolean } from 'joi';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Passenger {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public phonenumber: string;

  @Column('jsonb', { nullable: false })
  pickup?: object[];

  @Column('jsonb', { nullable: false })
  destination?: object[];
}

export default Passenger;
