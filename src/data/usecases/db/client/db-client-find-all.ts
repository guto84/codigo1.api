import { ClientFindAll } from '../../../../domain/usecases'
import { ClientFindAllRepository } from '../../../protocols'

export class DbClientFindAll implements ClientFindAll {
  constructor(private readonly repository: ClientFindAllRepository) {
    this.repository = repository
  }
  
  async findAll(): Promise<ClientFindAll.Result[]> {
    return await this.repository.findAll()
  }
}
