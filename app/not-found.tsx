import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <h1>
        <strong>404: </strong>Not Found
      </h1>

      <Link href="/">Return to home</Link>
    </section>
  )
}
