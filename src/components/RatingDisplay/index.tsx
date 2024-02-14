import { Rating } from '@/entities'

import { ReviewWrapper } from './styles'

export function RatingDisplay({ value, reviewsCount }: Rating) {
  return (
    <ReviewWrapper>
      <div>
        <span>{value}</span>
      </div>
      <strong>Excellent</strong>
      <span>({reviewsCount} Reviews)</span>
    </ReviewWrapper>
  )
}
