import { db } from '../helpers'
import { LogStoreRepository } from '../../../data/protocols'

export class LogRepository implements LogStoreRepository {

  async store(values: LogStoreRepository.Params): Promise<LogStoreRepository.Result> {
    const { error } = values
    const response = await db('logs').insert(values)
    return { id: response.shift(), error }
  }
}
