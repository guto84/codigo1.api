import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-routes-adapter'
import { makeUserStoreController } from '../factories/controllers/user'

export default (router: Router): void => {
  router.post('/users/store', adaptRoute(makeUserStoreController()))
}
