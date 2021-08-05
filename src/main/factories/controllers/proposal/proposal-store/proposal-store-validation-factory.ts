import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makeProposalStoreValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['client_id', 'ref', 'amount']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
