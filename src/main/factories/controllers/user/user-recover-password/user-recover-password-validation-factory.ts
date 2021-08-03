import { ValidationComposite, RequiredFieldValidation, CompareFieldsValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'

export const makeUserRecoverPasswordValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['uuid', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  return new ValidationComposite(validations)
}
