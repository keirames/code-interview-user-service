import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user_accounts' })
export class UserAccount {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'email', length: 255, unique: true })
  email!: string;

  @Column({ name: 'password', length: 255 })
  password!: string;

  @CreateDateColumn({ name: 'registration_time' })
  registrationTime?: Date;
}
