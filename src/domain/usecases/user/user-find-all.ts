export interface UserFindAll {
  findAll: () => Promise<UserFindAll.Result[]>
}

export namespace UserFindAll {
  export type Result = {
    id: number
    name: string
    email: string
  }
}
