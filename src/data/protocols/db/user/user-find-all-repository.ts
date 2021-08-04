export interface UserFindAllRepository {
  findAll: () => Promise<UserFindAllRepository.Result[]>
}

export namespace UserFindAllRepository {
  export type Result = {
    id: number
    name: string
    email: string
  }
}
