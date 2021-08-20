import { db } from '../helpers'
import {
  DeleteRepository,
  FindAllRepository,
  FindByIdRepository,
  ClientStoreRepository,
  ClientUpdateRepository
} from '../../../data/protocols'

export class ClientRepository implements
  FindAllRepository,
  FindByIdRepository,
  ClientStoreRepository,
  ClientUpdateRepository,
  DeleteRepository {

  async findAll(): Promise<object[]> {
    return await db('clients').select('id', 'name')
  }

  async findById(id: number): Promise<object> {
    return (await db('clients').select('id', 'name').where({ id })).shift()
  }

  async store(values: ClientStoreRepository.Params): Promise<ClientStoreRepository.Result> {
    const { name } = values
    const response = await db('clients').insert(values)
    return { id: response.shift(), name }
  }

  async update(id: number, values: ClientUpdateRepository.Params): Promise<number> {
    return await db('clients').update(values).where({ id })
  }

  async delete(id: number): Promise<number> {
    return await db('clients').del().where({ id })
  }
}
