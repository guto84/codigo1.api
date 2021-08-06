import { UserDelete } from '../../../../domain/usecases'
import { UserDeleteRepository } from '../../../protocols'

export class DbUserDelete implements UserDelete {
  constructor(private readonly repository: UserDeleteRepository) {
    this.repository = repository
  }

  async delete(id: number): Promise<number> {
    return await this.repository.delete(id)
  }
}
