export interface UserToken {
  id: number
  name: string
  email: string
}

export interface TokenEncrypt {
  encrypt(value: UserToken): Promise<string>
}
