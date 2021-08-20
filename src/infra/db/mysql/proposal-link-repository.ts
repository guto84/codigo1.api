import { db } from '../helpers'
import {
  DeleteRepository,
  FindByIdRepository,
  ProposalLinkStoreRepository,
  ProposalLinkUpdateRepository,
  FindAllByTenantIdRepository
} from '../../../data/protocols'

export class ProposalLinkRepository implements
  DeleteRepository,
  FindByIdRepository,
  ProposalLinkStoreRepository,
  ProposalLinkUpdateRepository,
  FindAllByTenantIdRepository {

  async findAllByTenantId(proposal_id: number): Promise<object[]> {
    return await db('proposal_links').select('id', 'name', 'link').where({ proposal_id })
  }

  async findById(id: number): Promise<object> {
    return (await db('proposal_links').select('id', 'name', 'link').where({ id })).shift()
  }

  async store(values: ProposalLinkStoreRepository.Params): Promise<ProposalLinkStoreRepository.Result> {
    const { proposal_id, name, link } = values
    const response = await db('proposal_links').insert(values)
    return { id: response.shift(), proposal_id, name, link }
  }

  async update(id: number, values: ProposalLinkUpdateRepository.Params): Promise<number> {
    return await db('proposal_links').update(values).where({ id })
  }

  async delete(id: number): Promise<number> {
    return await db('proposal_links').del().where({ id })
  }
}
