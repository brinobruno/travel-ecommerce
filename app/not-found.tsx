import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-medium">
        <strong>404: </strong>Not Found
      </h1>

      <Link href="/" className="underline">
        Return to home
      </Link>
    </section>
  )
}
