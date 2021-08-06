export interface UserUpload {
  upload: (id: number, values: UserUpload.Params) => Promise<number>
}

export namespace UserUpload {
  export type Params = {
    filename: string
    file_url: string
  }
}
