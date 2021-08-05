import { Router } from 'express'
import { auth } from '../middlewares'
import { adaptRoute } from '../adapters'
import {
  makeProposalStoreController,
  makeProposalListController,
  makeProposalShowController,
  makeProposalUpdateController,
  makeProposalDeleteController
} from '../factories/controllers'

export default (router: Router): void => {
  router.get('/proposals/list', auth, adaptRoute(makeProposalListController()))
  router.get('/proposals/:id', auth, adaptRoute(makeProposalShowController()))
  router.post('/proposals/store', auth, adaptRoute(makeProposalStoreController()))
  router.put('/proposals/:id', auth, adaptRoute(makeProposalUpdateController()))
  router.delete('/proposals/:id', auth, adaptRoute(makeProposalDeleteController()))
}
