import { LogModel } from '../../models'

export interface LogStoreModel {
  error: string
}

export interface LogStore {
  store(values: LogStoreModel): Promise<LogModel>
}
