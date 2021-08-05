import { Router } from 'express'
import { auth } from '../middlewares'
import { adaptRoute } from '../adapters'
import {
  makeContactDeleteController,
  makeContactListController,
  makeContactShowController,
  makeContactStoreController,
  makeContactUpdateController
} from '../factories/controllers'

export default (router: Router): void => {
  router.get('/contacts/:id', auth, adaptRoute(makeContactShowController()))
  router.post('/contacts/list', auth, adaptRoute(makeContactListController()))
  router.post('/contacts/store', auth, adaptRoute(makeContactStoreController()))
  router.put('/contacts/:id', auth, adaptRoute(makeContactUpdateController()))
  router.delete('/contacts/:id', auth, adaptRoute(makeContactDeleteController()))
}
