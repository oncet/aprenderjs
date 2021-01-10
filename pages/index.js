import Head from "next/head";
import LinkButton from "../components/link-button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aprender JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Aprender JavaScript</h1>
      <p>Cursos gratuitos de JavaSript en español.</p>
      <LinkButton href="cursos">Empezar ahora</LinkButton>
    </>
  );
}
