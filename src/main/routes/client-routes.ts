import { Router } from 'express'
import { auth } from '../middlewares'
import { adaptRoute } from '../adapters'
import {
  makeClientStoreController,
  makeClientListController,
  makeClientShowController,
  makeClientUpdateController,
  makeClientDeleteController
} from '../factories/controllers/client'

export default (router: Router): void => {
  router.get('/clients/list', auth, adaptRoute(makeClientListController()))
  router.get('/clients/:id', auth, adaptRoute(makeClientShowController()))
  router.post('/clients/store', auth, adaptRoute(makeClientStoreController()))
  router.put('/clients/:id', auth, adaptRoute(makeClientUpdateController()))
  router.delete('/clients/:id', auth, adaptRoute(makeClientDeleteController()))
}
