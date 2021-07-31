import knex from 'knex'
import env from '../../../main/config/env'

const { mysqlHost, mysqlUser, mysqlPassword, mysqlDatabase } = env

export const db = knex({
  client: 'mysql2',
  connection: {
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDatabase
  }
})
