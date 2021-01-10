import Head from "next/head";
import Link from "next/link";

export default function Courses() {
  return (
    <>
      <Head>
        <title>Cursos</title>
      </Head>
      <h1>Cursos</h1>
      <ul>
        <li>
          <Link href="/cursos/hello-world">
            <a>Hello World</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
