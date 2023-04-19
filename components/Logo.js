import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import logo from "../public/wynn-logo.gif"

export default function Logo(props) {
    if(!props.imageLogo) return;
    console.log('https://' + props.imageLogo.file.url)
    return (
        <Fragment>
            <div className="logo">
                <Link href="/">
                    <Image src={'https:' + props.imageLogo.file.url} width={100} height={100} alt={props.imageLogo.description} />                   
                </Link>
            </div>
        </Fragment>
    );
}