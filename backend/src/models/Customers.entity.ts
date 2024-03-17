import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

// import { Status } from "../types";

export enum Status {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  INACTIVE = "INACTIVE",
  WAITING_APPROVAL = "WAITING_APPROVAL",
}

@Entity("customers")
export class Customer {
  @PrimaryGeneratedColumn({ type: "int" })
  id: string;

  @Column()
  name: string;

  @Column()
  individualTaxpayer: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({
    type: "varchar",
    enum: Status,
    default: Status.WAITING_APPROVAL,
  })
  status: Status;

  @CreateDateColumn()
  created_at: Date;
}
