import Image from "next/image";
import firstCard from "../public/wynn resposible first.jpeg";
import Link from "next/link";
import TeaserCardItem from "./TeaserCardCarouselItem";
export default function TeaserCardCarousel({ compProps }) {
  return (
    <section className="teaser-card">
      <div className="container">
        <h2 className="mb-5">{compProps.fields.title}</h2>
        <div className="teaser-card-carousel">
          <div className="row row-cols-1 row-cols-lg-3 teaser-card-holder">
            {compProps.fields.cards.map((items, index) => (
              <TeaserCardItem
                key={index}
                description={items?.fields.bannerDescription}
                title={items?.fields.bannerTitle}
                image={items?.fields.bannerImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
