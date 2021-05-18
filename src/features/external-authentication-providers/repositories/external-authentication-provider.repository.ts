import { EntityRepository, Repository } from 'typeorm';
import { ExternalAuthenticationProvider } from 'src/features/external-authentication-providers/entities';
import { AuthProvider } from 'src/common/enums';

@EntityRepository(ExternalAuthenticationProvider)
export class ExternalAuthenticationProvidersRepository extends Repository<ExternalAuthenticationProvider> {
  findById(id: number): Promise<ExternalAuthenticationProvider | undefined> {
    return this.findOne({
      where: { id },
    });
  }

  findByName(
    name: AuthProvider,
  ): Promise<ExternalAuthenticationProvider | undefined> {
    return this.findOne({
      where: { name },
    });
  }
}
