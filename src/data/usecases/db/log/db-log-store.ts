import { LogStoreRepository } from '../../../protocols'

export class DbLogStore implements LogStoreRepository {
  constructor(private readonly repository: LogStoreRepository) {
    this.repository = repository
  }

  async store(values: LogStoreRepository.Params): Promise<LogStoreRepository.Result> {
    return await this.repository.store(values)
  }
}
