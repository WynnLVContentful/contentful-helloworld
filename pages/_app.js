// import '../styles/globals.css'
import Layout from '../components/Layout'
import "../styles/asset-style/style.scss"
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
