export interface ClientDelete {
  delete: (id: ClientDelete.Params) => Promise<ClientDelete.Result>
}

export namespace ClientDelete {
  export type Params = number
  export type Result = number
}
