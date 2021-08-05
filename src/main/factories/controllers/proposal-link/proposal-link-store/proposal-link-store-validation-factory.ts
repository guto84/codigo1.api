import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makeProposalLinkStoreValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['proposal_id', 'name', 'link']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
