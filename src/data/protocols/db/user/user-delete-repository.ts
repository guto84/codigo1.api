export interface UserDeleteRepository {
  delete: (id: UserDeleteRepository.Params) => Promise<UserDeleteRepository.Result>
}

export namespace UserDeleteRepository {
  export type Params = number
  export type Result = number
}
