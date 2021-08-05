import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makePaymentStoreValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['proposal_id', 'amount', 'method']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
