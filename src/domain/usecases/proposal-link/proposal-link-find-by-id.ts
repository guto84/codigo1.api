import { ProposalLinkModel } from "../../models"

export interface ProposalLinkFindById {
  findById: (token: ProposalLinkFindById.Params) => Promise<ProposalLinkFindById.Result>
}

export namespace ProposalLinkFindById {
  export type Params = number
  export type Result = ProposalLinkModel
}
