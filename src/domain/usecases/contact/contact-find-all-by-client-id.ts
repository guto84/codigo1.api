export interface ContactFindAllByClientId {
  findAllByClientId: (client_id: number) => Promise<ContactFindAllByClientId.Result[]>
}

export namespace ContactFindAllByClientId {
  export type Result = {
    id: number
    name: string
    email?: string
    phone?: string
    comments?: string
  }
}
