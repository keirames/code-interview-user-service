import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user-accounts')
export class UserAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({
    name: 'registration_time',
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  registrationTime?: Date;

  constructor(params: {
    email: string;
    password: string;
    registrationTime?: Date;
  }) {
    if (params !== undefined) {
      this.email = params.email;
      this.password = params.password;
      this.registrationTime = params.registrationTime;
    }
  }
}
