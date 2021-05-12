import { UserExternalLogin } from 'src/features/user-external-logins/entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

export enum AuthProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  GITHUB = 'github',
}

@Entity('external_authentication_providers')
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
