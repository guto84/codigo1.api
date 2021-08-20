import { db } from '../helpers'
import {
  DeleteRepository,
  FindByIdRepository,
  ClientLinkStoreRepository,
  ClientLinkUpdateRepository,
  FindAllByTenantIdRepository
} from '../../../data/protocols'

export class ClientLinkRepository implements
  DeleteRepository,
  FindByIdRepository,
  ClientLinkStoreRepository,
  ClientLinkUpdateRepository,
  FindAllByTenantIdRepository {

  async findAllByTenantId(client_id: number): Promise<object[]> {
    return await db('client_links').select('id', 'name', 'link').where({ client_id })
  }

  async findById(id: number): Promise<object> {
    return (await db('client_links').select('id', 'name', 'link').where({ id })).shift()
  }

  async store(values: ClientLinkStoreRepository.Params): Promise<ClientLinkStoreRepository.Result> {
    const { client_id, name, link } = values
    const response = await db('client_links').insert(values)
    return { id: response.shift(), client_id, name, link }
  }

  async update(id: number, values: ClientLinkUpdateRepository.Params): Promise<number> {
    return await db('client_links').update(values).where({ id })
  }

  async delete(id: number): Promise<number> {
    return await db('client_links').del().where({ id })
  }
}
