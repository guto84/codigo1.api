import { LogStore } from '../../../../domain/usecases'

export interface LogStoreRepository {
  store: (values: LogStoreRepository.Params) => Promise<LogStoreRepository.Result>
}

export namespace LogStoreRepository {
  export type Params = LogStore.Params
  export type Result = LogStore.Result
}
