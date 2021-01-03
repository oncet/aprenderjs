import Link from 'next/link'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <div
      className="container max-w-screen-md mx-auto border rounded shadow p-4 mt-4"
    >
      <p><Link href=".."><a>Home</a></Link></p>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
