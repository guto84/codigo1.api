export interface UserFindById {
  findById: (token: UserFindById.Params) => Promise<UserFindById.Result>
}

export namespace UserFindById {
  export type Params = number
  export type Result = {
    id: number
    name: string
    email: string
  }
}
