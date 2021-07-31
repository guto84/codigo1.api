import { LogModel } from '../../../../domain/models'
import { LogStore, LogStoreModel } from '../../../../domain/usecases/log'
import { LogStoreRepository } from '../../../protocols/db/log'

export class DbLogStore implements LogStore {
  constructor(private readonly repository: LogStoreRepository) {
    this.repository = repository
  }

  async store(values: LogStoreModel): Promise<LogModel> {
    return await this.repository.store(values)
  }
}
