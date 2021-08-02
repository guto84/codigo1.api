export interface UserAuth {
  auth(values: UserAuth.Params): Promise<UserAuth.Result>
}

export namespace UserAuth {
  export type Params = {
    email: string
    password: string
  }
  export type Result = {
    token: string
  }
}
