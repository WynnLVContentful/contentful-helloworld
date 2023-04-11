import { Fragment } from "react";
import Link from "next/link";
export default function Navigation() {

    return (
        <Fragment>
            <ul className="navbar-nav  d-flex ">
                <li className="nav-item ">
                    <Link href="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link href="/CEOLetter" className="nav-link">
                        LETTER FROM THE CEO
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link href="/" className="nav-link">
                        ESG REPORTS
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link href="/" className="nav-link">
                        INVESTOR SUMMARY
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link href="/" className="nav-link">
                        EEO-1
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link href="/" className="nav-link">
                        PRESS UPDATES
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
}