import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-routes-adapter'
import { makeUserStoreController, makeUserLoginController } from '../factories/controllers/user'

export default (router: Router): void => {
  router.post('/users/store', adaptRoute(makeUserStoreController()))
  router.post('/users/login', adaptRoute(makeUserLoginController()))
}
