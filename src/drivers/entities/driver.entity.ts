import { boolean } from 'joi';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Driver {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public phonenumber: string;

  @Column()
  public suspended: boolean = false;
}

export default Driver;
