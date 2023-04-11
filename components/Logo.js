import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import logo from "../public/wynn-logo.gif"
export default function Logo() {

    return (
        <Fragment>
            <div className="logo">
                <Link href="/">
                    <Image src={logo} width={100} height={100} alt="wynn logo" />
                </Link>
            </div>
        </Fragment>
    );
}