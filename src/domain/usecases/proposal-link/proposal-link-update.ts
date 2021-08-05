export interface ProposalLinkUpdate {
  update: (id: number, values: ProposalLinkUpdate.Params) => Promise<number>
}

export namespace ProposalLinkUpdate {
  export type Params = {
    name: string
    link: string
  }
}
