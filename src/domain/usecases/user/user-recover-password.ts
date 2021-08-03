export interface UserRecoverPassword {
  recoverPassword: (values: UserRecoverPassword.Params) => Promise<number>
}

export namespace UserRecoverPassword {
  export type Params = {
    uuid: string
    password: string
  }
}
