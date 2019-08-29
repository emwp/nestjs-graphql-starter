import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn, 
  Column,
  Unique,
} from 'typeorm'

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string
}