export interface FindAllByTenantIdRepository {
  findAllByTenantId: (tenantId: number) => Promise<object[]>
}
