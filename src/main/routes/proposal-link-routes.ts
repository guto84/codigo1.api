import { Router } from 'express'
import { auth } from '../middlewares'
import { adaptRoute } from '../adapters'
import {
  makeProposalLinkDeleteController,
  makeProposalLinkListController,
  makeProposalLinkShowController,
  makeProposalLinkStoreController,
  makeProposalLinkUpdateController
} from '../factories/controllers'

export default (router: Router): void => {
  router.get('/proposal-links/:id', auth, adaptRoute(makeProposalLinkShowController()))
  router.post('/proposal-links/list', auth, adaptRoute(makeProposalLinkListController()))
  router.post('/proposal-links/store', auth, adaptRoute(makeProposalLinkStoreController()))
  router.put('/proposal-links/:id', auth, adaptRoute(makeProposalLinkUpdateController()))
  router.delete('/proposal-links/:id', auth, adaptRoute(makeProposalLinkDeleteController()))
}
