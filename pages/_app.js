import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import Layout from "../components/Layout";
import { Fragment, useState } from "react";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [isnav, setisnav] = useState(false);
  function hands() {
    setisnav((prev) => !prev);
  }
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
