export interface UserFindByIdRepository {
  findById: (id: UserFindByIdRepository.Params) => Promise<UserFindByIdRepository.Result>
}

export namespace UserFindByIdRepository {
  export type Params = number
  export type Result = {
    id: number
    name: string
    email: string
  }
}