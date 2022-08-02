export interface Indexable {
  id: number
}

export interface Product extends Indexable {
  name: string,
  amount: string,
  orderId?: number
}