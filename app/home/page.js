import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>This is Home Pgae.</h1>
      <Link href='/blog'>Go to Blog Page</Link>
    </div>
  )
}