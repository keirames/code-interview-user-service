import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Challenge } from 'src/features/challenges/entities';

@Entity({ name: 'test_cases' })
export class TestCase {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'text' })
  text!: string;

  @Column({ name: 'test_string' })
  testString!: string;

  @Column({ name: 'challenge_id' })
  challengeId!: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.testCases)
  @JoinColumn({ name: 'challenge_id' })
  challenge!: Challenge;
}
