export interface UserUpdateRepository {
  update: (id: number, values: UserUpdateRepository.Params) => Promise<number>
}

export namespace UserUpdateRepository {
  export type Params = {
    name: string
    email: string
  }
}
