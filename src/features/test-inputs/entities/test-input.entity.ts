import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Challenge } from 'src/features/challenges/entities';

@Entity({ name: 'test_cases' })
export class TestInput {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'input', type: 'text' })
  input!: string;

  @Column({ name: 'challenge_id' })
  challengeId!: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.testInputs)
  challenge!: Challenge;
}
