import { db } from '../helpers'
import {
  DeleteRepository,
  FindAllRepository,
  FindByIdRepository,
  ProposalStoreRepository,
  ProposalUpdateRepository
} from '../../../data/protocols'

export class ProposalRepository implements
  FindAllRepository,
  FindByIdRepository,
  ProposalStoreRepository,
  ProposalUpdateRepository,
  DeleteRepository {

  async findAll(): Promise<object[]> {
    return await db('proposals')
      .join('clients', 'clients.id', 'proposals.client_id')
      .select('proposals.id', 'clients.name as client', 'proposals.ref', 'proposals.amount', 'proposals.confirmation_date')
  }

  async findById(id: number): Promise<object> {
    return (await db('proposals')
      .join('clients', 'clients.id', 'proposals.client_id')
      .where('proposals.id', id)
      .select('proposals.id', 'clients.name as client', 'proposals.ref', 'proposals.amount', 'proposals.confirmation_date')).shift()
  }

  async store(values: ProposalStoreRepository.Params): Promise<ProposalStoreRepository.Result> {
    const { client_id, ref, amount, confirmation_date } = values
    const response = await db('proposals').insert(values)
    return { id: response.shift(), client_id, ref, amount, confirmation_date }
  }

  async update(id: number, values: ProposalUpdateRepository.Params): Promise<number> {
    return await db('proposals').update(values).where({ id })
  }

  async delete(id: number): Promise<number> {
    return await db('proposals').del().where({ id })
  }
}
