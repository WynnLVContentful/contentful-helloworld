import { Fragment } from "react";
import Image from "next/image";
export default function HeroCarousel({ compProps }) {
  if (!compProps) return;

  const { image } = compProps.fields;
  const load = {};
  image.map((item, index) => {
    load[index] = item.fields.file.url;
  });

  return (
    <Fragment>

      <section className="hero-banner">
        <div className="hero-image-web">
          <Image
            alt="Wynn LasVegas Resorts and Casino web image"
            src={"https://" + load[0]}
            width={1400}
            height={414}
            className="mob-web-image"
          />
        </div>
        <div className="hero-image-mobile">
          <Image
            alt="Wynn LasVegas Resorts and Casino mobile images"
            src={!image && "https://" + load[1]}
            width={575}
            height={375}
            className="image-mobile"
          />
        </div>
      </section>
    </Fragment>
  );
}
