import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import { StateProvider } from "../lib/useStore";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Mike</title>
      </Head>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </div>
  )
}

export default MyApp
