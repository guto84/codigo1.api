export interface FindByIdRepository {
  findById: (id: number) => Promise<object>
}
