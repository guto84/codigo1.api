import { db } from '../helpers'
import {
  PaymentDeleteRepository,
  PaymentFindByIdRepository,
  PaymentStoreRepository,
  PaymentUpdateRepository,
  PaymentFindAllByProposalIdRepository
} from '../../../data/protocols'

export class PaymentRepository implements
PaymentDeleteRepository,
PaymentFindByIdRepository,
PaymentStoreRepository,
PaymentUpdateRepository,
PaymentFindAllByProposalIdRepository {

  async findAllByProposalId(proposal_id: number): Promise<PaymentFindAllByProposalIdRepository.Result[]> {
    return await db('payments').select('id', 'amount', 'method', 'comments').where({ proposal_id })
  }

  async findById(id: PaymentFindByIdRepository.Params): Promise<PaymentFindByIdRepository.Result> {
    return (await db('payments').select('id', 'amount', 'method', 'comments').where({ id })).shift()
  }

  async store(values: PaymentStoreRepository.Params): Promise<PaymentStoreRepository.Result> {
    const { proposal_id, amount, method, comments } = values
    const response = await db('payments').insert(values)
    return { id: response.shift(), proposal_id, amount, method, comments }
  }

  async update(id: number, values: PaymentUpdateRepository.Params): Promise<number> {
    return await db('payments').update(values).where({ id })
  }

  async delete(id: number): Promise<number> {
    return await db('payments').del().where({ id })
  }
}
