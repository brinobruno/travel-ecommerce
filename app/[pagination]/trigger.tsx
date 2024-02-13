'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const Trigger = ({ limit }: { limit: number }) => {
  const router = useRouter()

  const TriggerRef = useCallback(
    (node: any) => {
      if (!node) return

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            router.push(`/?limit=${limit + 10}`)
            observer.disconnect()
          }
        })
      })

      observer.observe(node)
    },
    [limit],
  )

  return <div ref={TriggerRef}></div>
}

export default Trigger
