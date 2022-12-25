import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
            <h1>
              <span>Wynn Restaurants</span>
              <span>Best in the world</span>
            </h1>                  
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2022 Just Add Wynn Las Vegas</p>
      </footer>
    </div>
  )
}