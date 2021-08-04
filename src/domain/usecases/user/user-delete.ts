export interface UserDelete {
  delete: (id: UserDelete.Params) => Promise<UserDelete.Result>
}

export namespace UserDelete {
  export type Params = number
  export type Result = number
}
