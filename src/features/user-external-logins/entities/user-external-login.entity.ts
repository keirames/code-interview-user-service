import { ExternalAuthenticationProvider } from 'src/features/external-authentication-providers/entities/external-authentication-provider.entity';
import { User } from 'src/features/users/entities';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';

@Entity('user_external_logins')
@Unique(['externalUserId', 'externalAuthenticationProviderId'])
export class UserExternalLogin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, name: 'external_user_id' })
  externalUserId: string;

  @Column({ length: 255, nullable: true })
  email?: string;

  @Column({ name: 'first_name', length: 255, nullable: true })
  firstName?: string;

  @Column({ name: 'last_name', length: 255, nullable: true })
  lastName?: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'external_authentication_provider_id' })
  externalAuthenticationProviderId: number;

  @ManyToOne(() => User, (user) => user.userExternalLogins, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(
    () => ExternalAuthenticationProvider,
    (externalAuthenticationProvider) =>
      externalAuthenticationProvider.userExternalLogins,
  )
  @JoinColumn({ name: 'external_authentication_provider_id' })
  externalAuthenticationProvider: ExternalAuthenticationProvider;

  constructor(params: {
    externalUserId: string;
    externalAuthenticationProviderId: number;
    email?: string;
    firstName?: string;
    lastName?: string;
  }) {
    if (params !== undefined) {
      this.externalUserId = params.externalUserId;
      this.externalAuthenticationProviderId =
        params.externalAuthenticationProviderId;
      this.email = params.email;
      this.firstName = params.firstName;
      this.lastName = params.lastName;
    }
  }
}
