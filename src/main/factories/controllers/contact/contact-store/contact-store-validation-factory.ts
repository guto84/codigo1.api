import { ValidationComposite, RequiredFieldValidation, EmailValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols'
import { EmailValidatorAdapter } from '../../../../../infra/adapters'

export const makeContactStoreValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['client_id', 'name']) {
    validations.push(new RequiredFieldValidation(field))
  }
  // validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
