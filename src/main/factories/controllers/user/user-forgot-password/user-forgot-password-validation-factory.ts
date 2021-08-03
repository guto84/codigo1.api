import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makeUserForgotPasswordValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
