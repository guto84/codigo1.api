export interface ClientUpdate {
  update: (id: number, values: ClientUpdate.Params) => Promise<number>
}

export namespace ClientUpdate {
  export type Params = {
    name: string
  }
}
