export interface ClientLinkFindAllByClientId {
  findAllByClientId: (client_id: number) => Promise<ClientLinkFindAllByClientId.Result[]>
}

export namespace ClientLinkFindAllByClientId {
  export type Result = {
    id: number
    name: string
    link: string
  }
}
