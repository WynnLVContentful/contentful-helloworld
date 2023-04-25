import { Fragment, use, useEffect, useState, useRef } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileNav from "./mobile-navbar";
import TopButton from "./TopButton";
export default function Header(props) {
    const TopPosition = useRef();
    const [toggle, setToggle] = useState(false);
    const [navbar, setNavbar] = useState(false);
    // const [showTop, setShowTop] = useState(false);
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
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 250) {
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
            <header tabIndex= "0" ref={TopPosition} >
                <div className={`layout ${navbar ? "active" : ""}`} >
                    <div className='container'>
                        <nav className='navbar navbar navbar-expand-lg'>
                            <div className='navbar-brand' tabIndex= "0" >
                              { <Logo imageLogo = {props.logo} />}
                            </div>

                            <div className='navbar-navs collapse navbar-collapse'>
                                <Navigation />
                            </div>
                            {<MobileNav toggleFeature={toggle} />}
                        </nav>
                    </div>
                    <div id="nav-toggle" className={toggle ? "open" : "close"} onClick={toggleButton} tabIndex= "0" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
       {     navbar && <TopButton/> }
        </Fragment>
    );
}