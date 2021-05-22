import { Column } from 'typeorm';

export class SubjectIdentifier {
  @Column({ name: 'title', length: 50, unique: true })
  title!: string;

  @Column({ name: 'slug', length: 255, unique: true })
  slug!: string;
}
