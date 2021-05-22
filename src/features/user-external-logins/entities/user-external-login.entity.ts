import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { ExternalAuthenticationProvider } from 'src/features/external-authentication-providers/entities/external-authentication-provider.entity';
import { User } from 'src/features/users/entities';

@Entity({ name: 'user_external_logins' })
@Unique(['externalUserId', 'externalAuthenticationProviderId'])
export class UserExternalLogin {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'external_user_id', length: 255 })
  externalUserId!: string;

  @Column({ name: 'email', length: 255, nullable: true })
  email?: string;

  @Column({ name: 'name', length: 255, nullable: true })
  name?: string;

  @Column({ name: 'user_id' })
  userId?: number;

  @ManyToOne(() => User, (user) => user.userExternalLogins, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @Column({ name: 'external_authentication_provider_id' })
  externalAuthenticationProviderId!: number;

  @ManyToOne(
    () => ExternalAuthenticationProvider,
    (externalAuthenticationProvider) =>
      externalAuthenticationProvider.userExternalLogins,
  )
  @JoinColumn({ name: 'external_authentication_provider_id' })
  externalAuthenticationProvider?: ExternalAuthenticationProvider;
}
