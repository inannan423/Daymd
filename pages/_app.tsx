import Head from 'next/head'
// import NavBar from '../components/NavBar.jsx'
import '../styles/globals.css'

import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { CoolHead } from '../components/CoolHead'
import  configs  from '../daymd.config'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{ configs.title}</title>
        <link rel="icon" type="image/x-icon" href={configs.favicon} />
      </Head>
      {/* <Hero /> */}
      <NavBar />
      <CoolHead/>
      <div>
        <Component {...pageProps} />
      </div>

      <Footer/>
    </>
  )
}
