export interface ClientFindAll {
  findAll: () => Promise<ClientFindAll.Result[]>
}

export namespace ClientFindAll {
  export type Result = {
    id: number
    name: string
  }
}
