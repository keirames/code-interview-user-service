import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Plan } from 'src/features/plans/entities';
import { User } from 'src/features/users/entities';

@Entity({ name: 'subscriptions' })
export class Subscription {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'start_time', type: 'timestamp with time zone' })
  startTime!: Date;

  @Column({ name: 'end_time', type: 'timestamp with time zone' })
  endTime!: Date;

  @Column({ name: 'plan_id' })
  planId!: number;

  @ManyToOne(() => Plan, (plan) => plan.subscriptions)
  @JoinColumn({ name: 'plan_id' })
  plan!: Plan;

  @Column({ name: 'user_id' })
  userId!: number;

  @ManyToOne(() => User, (user) => user.subscriptions)
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
