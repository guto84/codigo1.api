export interface UserUpdate {
  update: (id: number, values: UserUpdate.Params) => Promise<number>
}

export namespace UserUpdate {
  export type Params = {
    name: string
    email: string
  }
}
