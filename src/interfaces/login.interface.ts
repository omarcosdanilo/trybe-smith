interface Indexable {
  id?: number
}

export interface Login extends Indexable {
  username: string
  password: string
}