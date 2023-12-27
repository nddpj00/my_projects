import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h1>Dan Jones - Software Developer</h1>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  )
}

