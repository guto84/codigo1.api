import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
import { UtilUnlink } from '../../data/protocols'

export class UtilAdapter implements UtilUnlink {
  async unlink(...params: any): Promise<void> {
    return await promisify(fs.unlink)(
      path.resolve(...params)
    )
  }
}
