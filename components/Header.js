import { Fragment, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileNav from "./mobile-navbar";
export default function Header() {
    const [toggle, setToggle] = useState(false);
    function toggleButton() {
        console.log("clicked")
        setToggle((prev) => !prev)
    }
    return (
        <Fragment>
            <header className="layout">
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
            </header>
        </Fragment>
    );
}