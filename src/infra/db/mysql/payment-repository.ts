import { db } from '../helpers'
import {
  DeleteRepository,
  FindByIdRepository,
  PaymentStoreRepository,
  PaymentUpdateRepository,
  FindAllByTenantIdRepository
} from '../../../data/protocols'

export class PaymentRepository implements
DeleteRepository,
FindByIdRepository,
PaymentStoreRepository,
PaymentUpdateRepository,
FindAllByTenantIdRepository {

  async findAllByTenantId(proposal_id: number): Promise<object[]> {
    return await db('payments').select('id', 'amount', 'method', 'comments').where({ proposal_id })
  }

  async findById(id: number): Promise<object> {
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
