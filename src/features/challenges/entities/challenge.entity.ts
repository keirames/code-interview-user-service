import {
  Check,
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Submission } from 'src/features/submissions/entities';
import { TestCase } from 'src/features/test-cases/entities';
import { ModifyTime, SubjectIdentifier } from 'src/common/entities';
import { Contest } from 'src/features/contests/entities';
import { SolvedChallenge } from 'src/features/challenges/entities/solved-challenge.entity';
import { LikedChallenge } from 'src/features/challenges/entities/liked-challenge.entity';
import { TestInput } from 'src/features/test-inputs/entities';

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

  @Column(() => SubjectIdentifier, { prefix: false })
  subjectIdentifier!: SubjectIdentifier;

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

  @Column(() => ModifyTime, { prefix: false })
  modifyTime?: ModifyTime;

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt?: Date;

  @OneToMany(() => Submission, (submission) => submission.challenge)
  submissions!: Submission[];

  @OneToMany(() => TestCase, (testCase) => testCase.challenge, { eager: true })
  testCases!: TestCase[];

  @OneToMany(() => TestInput, (testInput) => testInput.challenge, {
    eager: true,
  })
  testInputs!: TestInput[];

  @Column({ name: 'contest_id' })
  contestId!: number;

  @ManyToOne(() => Contest, (contest) => contest.challenges)
  @JoinColumn({ name: 'contest_id' })
  contest!: Contest;

  @OneToMany(
    () => SolvedChallenge,
    (solvedChallenge) => solvedChallenge.challenge,
  )
  solvedUser!: SolvedChallenge;

  @OneToMany(() => LikedChallenge, (likedChallenge) => likedChallenge.challenge)
  likedUser!: LikedChallenge;
}
