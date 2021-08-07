import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Challenge } from 'src/features/challenges/entities';

@Entity({ name: 'test_inputs' })
export class TestInput {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'input', type: 'text' })
  input!: string;

  @Column({ name: 'challenge_id' })
  challengeId!: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.testInputs)
  @JoinColumn({ name: 'challenge_id' })
  challenge!: Challenge;
}
