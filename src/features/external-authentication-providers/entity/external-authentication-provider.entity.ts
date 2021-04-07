import { UserExternalLogin } from 'src/features/user-external-logins/entity/user-external-login.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

export enum AuthProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  GITHUB = 'github',
}

@Entity('external_authentication_providers')
export class ExternalAuthenticationProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'character varying', length: 25 })
  name: AuthProvider;

  @OneToMany(
    () => UserExternalLogin,
    (userExternalLogin) => userExternalLogin.externalAuthenticationProvider,
  )
  userExternalLogins: UserExternalLogin[];

  constructor(params: { name: AuthProvider }) {
    if (params !== undefined) this.name = params.name;
  }
}
