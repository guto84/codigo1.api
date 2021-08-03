export interface PasswordResetFindByUuidRepository {
  findByUuid: (token: PasswordResetFindByUuidRepository.Params) => Promise<PasswordResetFindByUuidRepository.Result>
}

export namespace PasswordResetFindByUuidRepository {
  export type Params = {
    uuid: string
  }
  export type Result = {
    uuid: string
    email: string
    created_at: Date
  }
}
