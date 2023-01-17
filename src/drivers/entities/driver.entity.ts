import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Driver {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public phonenumber: string;
}

export default Driver;
