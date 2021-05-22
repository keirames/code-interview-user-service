import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModifyTime, SubjectIdentifier } from 'src/common/entities';
import { Challenge } from 'src/features/challenges/entities';

@Entity({ name: 'contests' })
export class Contest {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column(() => SubjectIdentifier, { prefix: false })
  subjectIdentifier!: SubjectIdentifier;

  @Column(() => ModifyTime, { prefix: false })
  modifyTime!: ModifyTime;

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt?: Date;

  @OneToMany(() => Challenge, (challenge) => challenge.contest)
  challenges!: Challenge[];
}
