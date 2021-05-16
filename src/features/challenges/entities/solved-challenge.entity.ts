import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/features/users/entities';
import { Challenge } from 'src/features/challenges/entities/challenge.entity';

@Entity({ name: 'solved_challenges' })
export class SolvedChallenge {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id' })
  userId!: number;

  @ManyToOne(() => User, (user) => user.solvedChallenge)
  user!: User;

  @Column({ name: 'challenge_id' })
  challengeId!: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.solvedUser)
  challenge!: Challenge;
}
