import Link from 'next/link'

export default function Courses() {
  return (
    <>
      <h1>Cursos</h1>
      <ul>
        <li><Link href="/cursos/hello-world"><a>Hello World</a></Link></li>
      </ul>
    </>
  )
}