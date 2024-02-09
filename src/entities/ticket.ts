import { Price } from './price'
import { Rating } from './rating'

export interface ITicket {
  id: string
  name: string
  location: string
  image: string | undefined
  description: string
  price: Price
  rating: Rating
  createdAt: Date
  updatedAt: Date | null
}
