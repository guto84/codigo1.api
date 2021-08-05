import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makePaymentListValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['proposal_id']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
