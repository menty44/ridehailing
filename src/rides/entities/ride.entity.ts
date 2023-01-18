import { boolean } from 'joi';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Ride {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public passengerid: number;

  @Column()
  public driverid: number;

  @Column()
  public ridestatus: string;
}

export default Ride;
