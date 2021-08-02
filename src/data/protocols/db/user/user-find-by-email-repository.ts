export interface UserFindByEmailRepository {
  findByEmail: (email: UserFindByEmailRepository.Params) => Promise<UserFindByEmailRepository.Result>
}

export namespace UserFindByEmailRepository {
  export type Params = string
  export type Result = {
    id: number
    name: string
    email: string
    password: string
  }
}