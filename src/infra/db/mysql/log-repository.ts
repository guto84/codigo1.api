import { db } from '../helpers'
import { LogModel } from '../../../domain/models'
import { LogStoreModel } from '../../../domain/usecases/log'
import { LogStoreRepository } from '../../../data/protocols/db/log'

export class LogRepository implements LogStoreRepository {

  async store(values: LogStoreModel): Promise<LogModel> {
    const { error } = values
    const response = await db('logs').insert(values)
    return { id: response.shift(), error }
  }
}
