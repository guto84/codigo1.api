import { db } from '../helpers'

export class Model {
  constructor(private readonly table) {
    this.table = table
  }

  async findAll() {
    return await db(this.table).select()
  }

  async findById(id) {
    return (await db(this.table).select().where({ id })).shift()
  }

  async store(values) {
    return await db(this.table).insert(values)
  }

  async update(id, values) {
    return await db(this.table).update({ ...values, updated_at: new Date }).where({ id })
  }

  async remove(id) {
    return await db(this.table).del().where({ id })
  }
}
