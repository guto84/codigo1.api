import { db } from '../helpers'
import {
  ClientDeleteRepository,
  ClientFindAllRepository,
  ClientFindByIdRepository,
  ClientStoreRepository,
  ClientUpdateRepository
} from '../../../data/protocols'

export class ClientRepository implements
  ClientFindAllRepository,
  ClientFindByIdRepository,
  ClientStoreRepository,
  ClientUpdateRepository,
  ClientDeleteRepository {

  async findAll(): Promise<ClientFindAllRepository.Result[]> {
    return await db('clients').select('id', 'name')
  }

  async findById(id: ClientFindByIdRepository.Params): Promise<ClientFindByIdRepository.Result> {
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
