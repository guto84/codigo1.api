import { Router } from 'express'
import { auth } from '../middlewares'
import { adaptRoute } from '../adapters'
import {
  makeClientLinkDeleteController,
  makeClientLinkListController,
  makeClientLinkShowController,
  makeClientLinkStoreController,
  makeClientLinkUpdateController
} from '../factories/controllers'

export default (router: Router): void => {
  router.get('/client-links/:id', auth, adaptRoute(makeClientLinkShowController()))
  router.post('/client-links/list', auth, adaptRoute(makeClientLinkListController()))
  router.post('/client-links/store', auth, adaptRoute(makeClientLinkStoreController()))
  router.put('/client-links/:id', auth, adaptRoute(makeClientLinkUpdateController()))
  router.delete('/client-links/:id', auth, adaptRoute(makeClientLinkDeleteController()))
}
