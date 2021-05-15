import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserExternalLogin } from 'src/features/user-external-logins/entities';

export enum AuthProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  GITHUB = 'github',
}

@Entity({ name: 'external_authentication_providers' })
export class ExternalAuthenticationProvider {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'character varying', length: 25 })
  name!: AuthProvider;

  @OneToMany(
    () => UserExternalLogin,
    (userExternalLogin) => userExternalLogin.externalAuthenticationProvider,
  )
  userExternalLogins?: UserExternalLogin[];
}
