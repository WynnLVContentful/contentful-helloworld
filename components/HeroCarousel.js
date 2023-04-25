import { Fragment } from "react";
import Image from "next/image";
export default function HeroCarousel({ compProps }) {
  if (!compProps) return;

  const { image } = compProps.fields;
 
  let load = {};
  if (image !== undefined || image.length > 1) {
    image.map((item, index) => {
      load[index] = item.fields.file.url;
    });
  } else {
    load = image[0];
  }

  return (
    <Fragment>
      <section className="hero-banner">
        <div className="hero-image-web">
          {image !== undefined && (
            <Image
              alt="Wynn LasVegas Resorts and Casino web image"
              src={"https:" + load[0]}
              width={1400}
              height={414}
              className="mob-web-image"
              priority
            />
          )}
        </div>
        <div className="hero-image-mobile">
          {image.length > 1 && image !== undefined ? (
            <Image
              alt="Wynn LasVegas Resorts and Casino mobile images"
              src={"https:" + load[1]}
              width={575}
              height={375}
              className="image-mobile"
              priority
            />
          ) : (
            <span></span>
          )}
        </div>
      </section>
    </Fragment>
  );
}
