export interface ContactStore {
  store: (values: ContactStore.Params) => Promise<ContactStore.Result>
}

export namespace ContactStore {
  export type Params = {
    client_id: number
    name: string
    email?: string
    phone?: string
    comments?: string
  }
  export type Result = {
    id: number
    client_id: number
    name: string
    email?: string
    phone?: string
    comments?: string
  }
}
