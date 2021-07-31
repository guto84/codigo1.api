import { LogModel } from '../../../../domain/models'
import { LogStoreModel } from '../../../../domain/usecases/log'

export interface LogStoreRepository {
  store(values: LogStoreModel): Promise<LogModel>
}
