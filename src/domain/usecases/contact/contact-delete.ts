export interface ContactDelete {
  delete: (id: ContactDelete.Params) => Promise<ContactDelete.Result>
}

export namespace ContactDelete {
  export type Params = number
  export type Result = number
}
