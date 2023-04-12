import { Fragment, use, useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileNav from "./mobile-navbar";
export default function Header() {
    const [toggle, setToggle] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [size, setSize] = useState();
    function toggleButton() {
        setToggle((prev) => !prev)
    }

    useEffect(() => {
        if (toggle) {
            document.querySelector("body").classList.add("no-scroll")
        } else {
            document.querySelector("body").classList.remove("no-scroll")
        }
    }, [toggle])
    useEffect(() => {

    }, [])

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setNavbar(true);
            } else {
                setNavbar(false)
            }
        })
        window.addEventListener("resize", () => {
            if (window.innerWidth < 991) {
                return;
            }
            setToggle(false)
        })
    }

    return (
        <Fragment>
            <header >
                <div className={`layout ${navbar ? "active" : ""}`} >
                    <div className='container'>
                        <nav className='navbar navbar navbar-expand-lg'>
                            <div className='navbar-brand'>
                                <Logo />
                            </div>

                            <div className='navbar-navs collapse navbar-collapse'>
                                <Navigation />
                            </div>
                            {<MobileNav toggleFeature={toggle} />}
                        </nav>
                    </div>
                    <div id="nav-toggle" className={toggle ? "open" : "close"} onClick={toggleButton}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}