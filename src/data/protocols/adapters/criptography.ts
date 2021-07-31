export interface CriptographyCompare {
  compare(value: string, hash: string): Promise<boolean>
}

export interface CriptographyHash {
  hash(value: string): Promise<string>
}
