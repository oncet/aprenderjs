import Head from 'next/head'
import Button from '../components/button'
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aprender JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>Aprender JavaScript</Header>
      <p className="text-lg mt-3">Cursos gratuitos de JavaSript en español.</p>
      <Button className="mt-4" href="courses">Empezar ahora</Button>
    </>
  )
}
