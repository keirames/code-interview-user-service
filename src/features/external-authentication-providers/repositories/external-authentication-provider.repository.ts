import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import { ExternalAuthenticationProvider } from 'src/features/external-authentication-providers/entities';
import { AuthProvider } from 'src/common/enums';

@EntityRepository(ExternalAuthenticationProvider)
export class ExternalAuthenticationProvidersRepository extends Repository<ExternalAuthenticationProvider> {
  findById(
    id: number,
    options: FindOneOptions = {},
  ): Promise<ExternalAuthenticationProvider | undefined> {
    return this.findOne({ id }, options);
  }

  findByName(
    name: AuthProvider,
    options: FindOneOptions = {},
  ): Promise<ExternalAuthenticationProvider | undefined> {
    return this.findOne({ name }, options);
  }
}
