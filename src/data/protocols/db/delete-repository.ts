export interface DeleteRepository {
  delete: (id: number) => Promise<number>
}
