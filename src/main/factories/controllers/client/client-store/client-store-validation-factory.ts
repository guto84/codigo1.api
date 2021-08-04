import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makeClientStoreValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
