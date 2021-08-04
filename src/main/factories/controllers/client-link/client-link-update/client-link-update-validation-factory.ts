import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makeClientLinkUpdateValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'link']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
