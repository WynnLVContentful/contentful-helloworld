import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import logo from "../public/wynn-logo.gif"

export default function Logo({compProps}) {
    if(!compProps) return;

    const {logo} = compProps.fields;

      
    return (
        <Fragment>
            <div className="logo">
                <Link href="/">
                    {
                        logo.fields.file.url && <Image src={'https://' + logo.fields.file.url} width={100} height={100} alt={logo.fields.description} />   
                    }
                                    
                </Link>
            </div>
        </Fragment>
    );
}