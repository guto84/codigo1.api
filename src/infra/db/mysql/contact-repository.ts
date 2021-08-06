import { db } from '../helpers'
import {
  ContactDeleteRepository,
  ContactFindByIdRepository,
  ContactStoreRepository,
  ContactUpdateRepository,
  ContactFindAllByClientIdRepository
} from '../../../data/protocols'

export class ContactRepository implements
  ContactDeleteRepository,
  ContactFindByIdRepository,
  ContactStoreRepository,
  ContactUpdateRepository,
  ContactFindAllByClientIdRepository {

  async findAllByClientId(client_id: number): Promise<ContactFindAllByClientIdRepository.Result[]> {
    return await db('contacts').select('id', 'name', 'email', 'phone', 'comments').where({ client_id })
  }

  async findById(id: ContactFindByIdRepository.Params): Promise<ContactFindByIdRepository.Result> {
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
