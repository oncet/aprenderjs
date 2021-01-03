import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto border rounded shadow p-4 mt-4">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
