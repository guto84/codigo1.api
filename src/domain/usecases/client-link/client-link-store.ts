export interface ClientLinkStore {
  store: (values: ClientLinkStore.Params) => Promise<ClientLinkStore.Result>
}

export namespace ClientLinkStore {
  export type Params = {
    client_id: number
    name: string
    link: string
  }
  export type Result = {
    id: number
    client_id: number
    name: string
    link: string
  }
}
