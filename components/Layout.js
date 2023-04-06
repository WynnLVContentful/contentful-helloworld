import Link from 'next/link'
import Logo from './Logo'
import Navigation from './Navigation'
import Footer from './Footer' 

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Logo></Logo>
      <header>
        <Navigation></Navigation>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}