import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
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
  @CreateDateColumn()
  created_at: Date;
}
