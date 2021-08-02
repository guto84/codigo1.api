export interface UserStore {
  store: (values: UserStore.Params) => Promise<UserStore.Result>
}

export namespace UserStore {
  export type Params = {
    name: string
    email: string
    password: string
  }
  export type Result = {
    id: number
    name: string
    email: string
  }
}
