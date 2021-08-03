import { Router } from 'express'
import { auth } from '../middlewares'
import { adaptRoute } from '../adapters'
import {
  makeUserStoreController,
  makeUserLoginController,
  makeUserForgotPasswordController,
  makeUserRecoverPasswordController
} from '../factories/controllers/user'

export default (router: Router): void => {
  router.post('/users/login', adaptRoute(makeUserLoginController()))
  router.post('/users/forgot-password', adaptRoute(makeUserForgotPasswordController()))
  router.post('/users/store', auth, adaptRoute(makeUserStoreController()))
  router.put('/users/recover-password', adaptRoute(makeUserRecoverPasswordController()))
}
