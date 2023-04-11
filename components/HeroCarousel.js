import { Fragment } from "react";
import Image from "next/image";
import imageweb from "../public/hero-home-web.jpeg";
import imagemobile from "../public/hero-mobile.png"
export default function HeroCarousel() {

    return (
        <Fragment>
            <section className="hero-banner">
                <div className="hero-image-web">
                    <Image
                        alt="web image"
                        src={imageweb}
                        width={1400}
                        height={414}
                        className="mob-web-image"
                    />
                </div>
                <div className="hero-image-mobile">
                    <Image
                        alt="mobile images"
                        src={imagemobile}
                        width={575}
                        height={375}
                        className="image-mobile"
                    />
                </div>
            </section>

        </Fragment>
    );
}