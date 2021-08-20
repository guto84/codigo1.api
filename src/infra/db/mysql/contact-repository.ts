import { db } from '../helpers'
import {
  DeleteRepository,
  FindByIdRepository,
  ContactStoreRepository,
  ContactUpdateRepository,
  FindAllByTenantIdRepository
} from '../../../data/protocols'

export class ContactRepository implements
  DeleteRepository,
  FindByIdRepository,
  ContactStoreRepository,
  ContactUpdateRepository,
  FindAllByTenantIdRepository {

  async findAllByTenantId(client_id: number): Promise<object[]> {
    return await db('contacts').select('id', 'name', 'email', 'phone', 'comments').where({ client_id })
  }

  async findById(id: number): Promise<object> {
    return (await db('contacts').select('id', 'name', 'email', 'phone', 'comments').where({ id })).shift()
  }

  async store(values: ContactStoreRepository.Params): Promise<ContactStoreRepository.Result> {
    const { client_id, name, email, phone, comments } = values
    const response = await db('contacts').insert(values)
    return { id: response.shift(), client_id, name, email, phone, comments }
  }

  async update(id: number, values: ContactUpdateRepository.Params): Promise<number> {
    return await db('contacts').update(values).where({ id })
  }

  async delete(id: number): Promise<number> {
    return await db('contacts').del().where({ id })
  }
}
