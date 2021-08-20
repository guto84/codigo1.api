import { FindAllByTenantId } from '../../../domain/usecases'
import { FindAllByTenantIdRepository } from '../../protocols'

export class DbFindAllByTenantId implements FindAllByTenantId {
  constructor(private readonly repository: FindAllByTenantIdRepository) {
    this.repository = repository
  }

  async findAllByTenantId(tenantId: number): Promise<object[]> {
    return await this.repository.findAllByTenantId(tenantId)
  }
}
