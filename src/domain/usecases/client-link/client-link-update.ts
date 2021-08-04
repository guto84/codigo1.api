export interface ClientLinkUpdate {
  update: (id: number, values: ClientLinkUpdate.Params) => Promise<number>
}

export namespace ClientLinkUpdate {
  export type Params = {
    name: string
    link: string
  }
}
