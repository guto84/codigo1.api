import { Router } from 'express'
import { auth } from '../middlewares'
import { adaptRoute } from '../adapters'
import {
  makePaymentDeleteController,
  makePaymentListController,
  makePaymentShowController,
  makePaymentStoreController,
  makePaymentUpdateController
} from '../factories/controllers'

export default (router: Router): void => {
  router.get('/payments/:id', auth, adaptRoute(makePaymentShowController()))
  router.post('/payments/list', auth, adaptRoute(makePaymentListController()))
  router.post('/payments/store', auth, adaptRoute(makePaymentStoreController()))
  router.put('/payments/:id', auth, adaptRoute(makePaymentUpdateController()))
  router.delete('/payments/:id', auth, adaptRoute(makePaymentDeleteController()))
}
