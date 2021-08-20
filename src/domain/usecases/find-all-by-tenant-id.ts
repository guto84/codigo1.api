export interface FindAllByTenantId {
  findAllByTenantId: (tenantId: number) => Promise<object[]>
}
