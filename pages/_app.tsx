import Head from "next/head";
// import NavBar from '../components/NavBar.jsx'
import "../styles/globals.css";
import React from "react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { CoolHead } from "../components/CoolHead";
import ScrollToTop from "react-scroll-to-top";
import configs from "../daymd.config";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{configs.title}</title>
        <link rel="icon" type="image/x-icon" href={configs.favicon} />
      </Head>
      {/* <Hero /> */}

      <div
        className="transition duration-500 ease-in-out"
        style={{
          display: configs.ifBackTop ? "block" : "none",
        }}
      >
        <ScrollToTop
          className="Totop"
          smooth
          component={
            <p style={{ color: "#5b5bff", margin: "0 auto" }}>
              {configs.backTopText}
            </p>
          }
        />
      </div>
      <div>
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}
