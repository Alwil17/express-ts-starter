import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { ATimestamp } from "./abstract/timestamp";

export enum RoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Entity("users")
export class User extends ATimestamp {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  // exclude
  @Column()
  password: string;

  @Column({ enum: RoleEnum, default: RoleEnum.USER })
  role: RoleEnum;
}
