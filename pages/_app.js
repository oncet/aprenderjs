import Link from "next/link";
import { motion } from "framer-motion";

import "../styles/global.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="container max-w-screen-md mx-auto border rounded shadow p-4 mt-4">
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </div>
  );
}

export default MyApp;
