import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import Layout from "../components/Layout";
import { Fragment, useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [isnav, setisnav] = useState(false);
  function hands() {
    setisnav((prev) => !prev);
  }
  return (
    <Fragment>
      <Head>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
       <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
