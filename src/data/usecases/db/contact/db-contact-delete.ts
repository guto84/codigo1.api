import { ContactDelete } from '../../../../domain/usecases'
import { ContactDeleteRepository } from '../../../protocols'

export class DbContactDelete implements ContactDelete {
  constructor(private readonly repository: ContactDeleteRepository) {
    this.repository = repository
  }

  async delete(id: number): Promise<number> {
    return await this.repository.delete(id)
  }
}
