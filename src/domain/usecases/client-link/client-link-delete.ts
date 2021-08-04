export interface ClientLinkDelete {
  delete: (id: ClientLinkDelete.Params) => Promise<ClientLinkDelete.Result>
}

export namespace ClientLinkDelete {
  export type Params = number
  export type Result = number
}
