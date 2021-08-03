import { LogStore } from '../../../../domain/usecases'
import { LogStoreRepository } from '../../../protocols'

export class DbLogStore implements LogStore {
  constructor(private readonly repository: LogStoreRepository) {
    this.repository = repository
  }

  async store(values: LogStore.Params): Promise<LogStore.Result> {
    return await this.repository.store(values)
  }
}
