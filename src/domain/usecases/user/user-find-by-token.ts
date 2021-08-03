export interface UserFindByToken {
  findByToken: (token: UserFindByToken.Params) => Promise<UserFindByToken.Result>
}

export namespace UserFindByToken {
  export type Params = string
  export type Result = {
    id: number
    name: string
    email: string
  }
}
