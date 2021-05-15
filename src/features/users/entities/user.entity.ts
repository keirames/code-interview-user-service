import {
  Check,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subscription } from 'src/features/subscriptions/entities';
import { UserAccount } from 'src/features/user-accounts/entities';
import { UserExternalLogin } from 'src/features/user-external-logins/entities';
import { Submission } from 'src/features/submissions/entities/submission.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'total_points', default: 0 })
  @Check('total_points >= 0')
  totalPoints?: number;

  @Column({ name: 'first_name', length: 25, default: '' })
  firstName?: string;

  @Column({ name: 'last_name', length: 25, default: '' })
  lastName?: string;

  @Column({ name: 'is_activated', type: 'boolean', default: false })
  isActivated?: boolean;

  @Column({ name: 'user_account_id', nullable: true })
  userAccountId?: number;

  @OneToOne(() => UserAccount, { nullable: true, cascade: true })
  @JoinColumn({ name: 'user_account_id' })
  userAccount?: UserAccount;

  @OneToMany(
    () => UserExternalLogin,
    (userExternalLogin) => userExternalLogin.user,
    { cascade: true, onDelete: 'CASCADE' },
  )
  userExternalLogins!: UserExternalLogin[];

  @OneToMany(() => Subscription, (subscription) => subscription.user)
  subscriptions!: Subscription[];

  @OneToMany(() => Submission, (submission) => submission.user)
  submissions!: Submission[];
}
