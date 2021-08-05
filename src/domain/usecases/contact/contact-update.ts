export interface ContactUpdate {
  update: (id: number, values: ContactUpdate.Params) => Promise<number>
}

export namespace ContactUpdate {
  export type Params = {
    name: string
    email?: string
    phone?: string
    comments?: string
  }
}
