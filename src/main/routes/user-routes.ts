import { Router } from 'express'
import { auth } from '../middlewares'
import { adaptRoute } from '../adapters'
import {
  makeUserStoreController,
  makeUserLoginController,
  makeUserForgotPasswordController,
  makeUserRecoverPasswordController,
  makeUserListController,
  makeUserShowController,
  makeUserUpdateController
} from '../factories/controllers/user'

export default (router: Router): void => {
  router.post('/users/login', adaptRoute(makeUserLoginController()))
  router.post('/users/forgot-password', adaptRoute(makeUserForgotPasswordController()))
  router.put('/users/recover-password', adaptRoute(makeUserRecoverPasswordController()))

  router.get('/users/list', auth, adaptRoute(makeUserListController()))
  router.get('/users/:id', auth, adaptRoute(makeUserShowController()))
  router.post('/users/store', auth, adaptRoute(makeUserStoreController()))
  router.put('/users/:id', auth, adaptRoute(makeUserUpdateController()))
  // router.delete('/users/:id', auth, adaptRoute(makeUserStoreController()))
}
