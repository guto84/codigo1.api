export interface LogStore {
  store: (values: LogStore.Params) => Promise<LogStore.Result>
}

export namespace LogStore {
  export type Params = {
    error: string
  }
  export type Result = {
    id: number
    error: string
  }
}
