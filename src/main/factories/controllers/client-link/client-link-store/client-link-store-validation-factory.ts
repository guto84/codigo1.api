import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makeClientLinkStoreValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['client_id', 'name', 'link']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
