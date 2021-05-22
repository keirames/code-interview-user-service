import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/features/users/entities';
import { Challenge } from 'src/features/challenges/entities/challenge.entity';

@Entity({ name: 'solved_challenges' })
export class SolvedChallenge {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id' })
  userId!: number;

  @ManyToOne(() => User, (user) => user.solvedChallenge)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ name: 'challenge_id' })
  challengeId!: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.solvedUser)
  @JoinColumn({ name: 'challenge_id' })
  challenge!: Challenge;
}
