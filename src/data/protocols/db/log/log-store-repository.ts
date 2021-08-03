export interface LogStoreRepository {
  store: (values: LogStoreRepository.Params) => Promise<LogStoreRepository.Result>
}

export namespace LogStoreRepository {
  export type Params = {
    error: string
  }
  export type Result = {
    id: number
    error: string
  }
}
