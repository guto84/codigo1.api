export interface UserLogin {
  login: (values: UserLogin.Params) => Promise<UserLogin.Result>
}

export namespace UserLogin {
  export type Params = {
    email: string
    password: string
  }
  export type Result = {
    token: string
  }
}
