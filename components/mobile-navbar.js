import { Fragment } from "react";
import Link from "next/link";
import Logo from "./Logo";
function MobileNav(props) {
    console.log(props.toggleFeature)
    const checkMobileNav = props.toggleFeature ? "open" : "close";
    return (<Fragment>
        <section className={`mobile-nav mobile-nav-${checkMobileNav}`}>
            <ul className="nav-lists">
                <li className="nav-item">
                    <Link href="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/CEOLetter" className="nav-link">
                        LETTER FROM THE CEO
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/ESG-reports" className="nav-link">
                        ESG REPORTS

                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/Invester-summary" className="nav-link">
                        INVESTOR SUMMARY

                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/" className="nav-link">
                        EEO-1

                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/" className="nav-link">
                        PRESS UPDATES
                    </Link>
                </li>
            </ul>
        </section>
    </Fragment>);
}

export default MobileNav;