import { Delete } from '../../../domain/usecases'
import { DeleteRepository } from '../../../data/protocols'

export class DbDelete implements Delete {
  constructor(private readonly repository: DeleteRepository) {
    this.repository = repository
  }

  async delete(id: number): Promise<number> {
    return await this.repository.delete(id)
  }
}
