import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Challenge } from 'src/features/challenges/entities';
import { User } from 'src/features/users/entities';

@Entity({ name: 'submissions' })
export class Submission {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'answer' })
  answer!: string;

  @Column({ name: 'is_passed' })
  isPassed!: boolean;

  @Column({ name: 'challenge_id' })
  challengeId!: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.submissions)
  @JoinColumn({ name: 'challenge_id' })
  challenge!: Challenge;

  @Column({ name: 'user_id' })
  userId!: number;

  @ManyToOne(() => User, (user) => user.submissions)
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
