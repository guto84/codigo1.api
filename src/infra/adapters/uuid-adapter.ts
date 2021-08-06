import { v4 } from 'uuid'
import { UuidGenerator } from '../../data/protocols'

export class UuidAdapter implements UuidGenerator {
  generator() {
    return v4()
  }
}
