import { ProposalFindAll } from '../../../../domain/usecases'

export interface ProposalFindAllRepository {
  findAll: () => Promise<ProposalFindAll.Result[]>
}

export namespace ProposalFindAllRepository {
  export type Result = ProposalFindAll.Result
}
