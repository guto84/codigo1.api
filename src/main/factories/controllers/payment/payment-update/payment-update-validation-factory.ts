import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makePaymentUpdateValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['amount', 'method']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
