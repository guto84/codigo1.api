export interface ClientLinkFindById {
  findById: (token: ClientLinkFindById.Params) => Promise<ClientLinkFindById.Result>
}

export namespace ClientLinkFindById {
  export type Params = number
  export type Result = {
    id: number
    name: string
    link: string
  }
}
