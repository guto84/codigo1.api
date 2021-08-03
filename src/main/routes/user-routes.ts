import { Router } from 'express'
import { auth } from '../middlewares'
import { adaptRoute } from '../adapters'
import { makeUserStoreController, makeUserLoginController } from '../factories/controllers/user'

export default (router: Router): void => {
  router.post('/users/login', adaptRoute(makeUserLoginController()))
  router.post('/users/store', auth, adaptRoute(makeUserStoreController()))
}
