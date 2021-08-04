import { ClientDelete } from '../../../../domain/usecases'
import { ClientDeleteRepository } from '../../../protocols'

export class DbClientDelete implements ClientDelete {
  constructor(private readonly repository: ClientDeleteRepository) {
    this.repository = repository
  }
  
  async delete(id: number): Promise<number> {
    return await this.repository.delete(id)
  }
}
