import { UserUpload } from '../../../../domain/usecases'
import { UserFindByIdRepository, UserUploadRepository, UtilUnlink } from '../../../protocols'

export class DbUserUpload implements UserUpload {
  constructor(
    private readonly findByIdRepository: UserFindByIdRepository,
    private readonly uploadRepository: UserUploadRepository,
    private readonly util: UtilUnlink
  ) {
    this.findByIdRepository = findByIdRepository
    this.uploadRepository = uploadRepository
    this.util = util
  }

  async upload(id: number, values: UserUpload.Params): Promise<number> {

    const user = await this.findByIdRepository.findById(id)

    if (user.filename) {
      await this.util.unlink(__dirname, '..', '..', '..', '..', '..', 'public', user.filename)
    }

    return await this.uploadRepository.upload(id, values)
  }
}
