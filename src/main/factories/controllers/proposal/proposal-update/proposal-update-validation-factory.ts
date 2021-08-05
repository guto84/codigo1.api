import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makeProposalUpdateValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['ref', 'amount']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
