import { UserUpload } from '../../../../domain/usecases'

export interface UserUploadRepository {
  upload: (id: number, values: UserUpload.Params) => Promise<number>
}

export namespace UserUploadRepository {
  export type Params = UserUpload.Params
}
