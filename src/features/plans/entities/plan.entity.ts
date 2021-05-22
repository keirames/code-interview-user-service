import {
  Check,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subscription } from 'src/features/subscriptions/entities';

@Entity({ name: 'plans' })
export class Plan {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'name', length: 255 })
  name!: string;

  @Column({ name: 'credits_per_month' })
  @Check('credits_per_month >= 0')
  creditsPerMonth!: number;

  @Column({ name: 'price_per_month' })
  @Check('price_per_month >= 0')
  pricePerMonth!: number;

  @OneToMany(() => Subscription, (subscription) => subscription.plan)
  subscriptions!: Subscription[];
}
