import Link from 'next/link'
import { Fragment, useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileNav from './mobile-navbar';
import Header from './Header';

export default function Layout({ children }) {


  return (
    <Fragment>
      <Header />
      <main className="page-content">
        {children}
      </main>
    </Fragment>
  )
}