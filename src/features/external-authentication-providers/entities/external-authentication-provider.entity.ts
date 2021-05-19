import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserExternalLogin } from 'src/features/user-external-logins/entities';
import { AuthProvider } from 'src/common/enums';

@Entity({ name: 'external_authentication_providers' })
export class ExternalAuthenticationProvider {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'name', type: 'character varying', length: 25, unique: true })
  name!: AuthProvider;

  @OneToMany(
    () => UserExternalLogin,
    (userExternalLogin) => userExternalLogin.externalAuthenticationProvider,
  )
  userExternalLogins?: UserExternalLogin[];
}
