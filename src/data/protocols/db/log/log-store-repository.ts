import { LogStore } from '../../../../domain/usecases'

export interface LogStoreRepository {
  store: (values: LogStore.Params) => Promise<LogStore.Result>
}

export namespace LogStoreRepository {
  export type Params = LogStore.Params
  export type Result = LogStore.Result
}
