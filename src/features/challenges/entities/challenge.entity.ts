import {
  Check,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Submission } from 'src/features/submissions/entities/submission.entity';

// ? May be put this into another file ?.
export enum Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

@Entity({ name: 'challenges' })
export class Challenge {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'title', length: 25, unique: true })
  title!: string;

  @Column({ name: 'slug', length: 50, unique: true })
  slug!: string;

  @Column({ name: 'problem', type: 'text' })
  problem!: string;

  @Column({ name: 'input_format', type: 'text' })
  inputFormat!: string;

  @Column({ name: 'output_format', type: 'text' })
  outputFormat!: string;

  @Column({ name: 'challenge_seed', type: 'text' })
  challengeSeed!: string;

  @Column({ name: 'level', type: 'enum', enum: Level, default: Level.Easy })
  level!: Level;

  @Column({ name: 'points', default: 0 })
  @Check('points >= 0')
  points?: number;

  @Column({ name: 'is_premium', default: false })
  isPremium?: boolean;

  @OneToMany(() => Submission, (submission) => submission.challenge)
  submissions!: Submission[];

  // @Column({ name: 'contest_id' })
  // contestId: number;
}
