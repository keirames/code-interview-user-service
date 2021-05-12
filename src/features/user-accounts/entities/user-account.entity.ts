import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_accounts')
export class UserAccount {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 255, unique: true })
  email!: string;

  @Column({ length: 255 })
  password!: string;

  @Column({
    name: 'registration_time',
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  registrationTime?: Date;
}
