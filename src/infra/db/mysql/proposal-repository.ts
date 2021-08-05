import { db } from '../helpers'
import {
  ProposalDeleteRepository,
  ProposalFindAllRepository,
  ProposalFindByIdRepository,
  ProposalStoreRepository,
  ProposalUpdateRepository
} from '../../../data/protocols'

export class ProposalRepository implements
  ProposalFindAllRepository,
  ProposalFindByIdRepository,
  ProposalStoreRepository,
  ProposalUpdateRepository,
  ProposalDeleteRepository {

  async findAll(): Promise<ProposalFindAllRepository.Result[]> {
    return await db('proposals')
      .join('clients', 'clients.id', 'proposals.client_id')
      .select('proposals.id', 'clients.name as client', 'proposals.ref', 'proposals.amount')
  }

  async findById(id: ProposalFindByIdRepository.Params): Promise<ProposalFindByIdRepository.Result> {
    return (await db('proposals')
      .join('clients', 'clients.id', 'proposals.client_id')
      .where('proposals.id', id)
      .select('proposals.id', 'clients.name as client', 'proposals.ref', 'proposals.amount')).shift()
  }

  async store(values: ProposalStoreRepository.Params): Promise<ProposalStoreRepository.Result> {
    const { client_id, ref, amount } = values
    const response = await db('proposals').insert(values)
    return { id: response.shift(), client_id, ref, amount }
  }

  async update(id: number, values: ProposalUpdateRepository.Params): Promise<number> {
    return await db('proposals').update(values).where({ id })
  }

  async delete(id: number): Promise<number> {
    return await db('proposals').del().where({ id })
  }
}
