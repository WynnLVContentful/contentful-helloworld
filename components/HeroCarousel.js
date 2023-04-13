import { Fragment } from "react";
import Image from "next/image";
import imageweb from "../public/hero-web.png";
import imagemobile from "../public/hero-mobile.png"
export default function HeroCarousel({ compProps }) {

    if (!compProps) return;

    const { image } = compProps.fields;

    return (
        <Fragment>

            <section className="hero-banner">
                {image.map(hero => {
                    return(
                        <Fragment>
                            <div className="hero-image-web">
                                <Image
                                    alt="web image"
                                    src={'https://' + hero.fields.file.url}
                                    width={1400}
                                    height={414}
                                    className="mob-web-image"
                                />
                            </div>
                            <div className="hero-image-mobile">
                                <Image
                                    alt="mobile images"
                                    src={'https://' + hero.fields.file.url}
                                    width={575}
                                    height={375}
                                    className="image-mobile"
                                />
                            </div>
                        </Fragment>
                    )
                })}
            </section>

        </Fragment>
    );
}