export interface UserForgotPassword {
  forgotPassword: (email: UserForgotPassword.Params) => Promise<UserForgotPassword.Result>
}

export namespace UserForgotPassword {
  export type Params = string
  export type Result = {
    uuid: string
    email: string
  }
}
