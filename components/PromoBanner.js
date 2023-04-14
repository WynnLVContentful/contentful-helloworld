import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import TwoColumnBanner from "./TwoColumnBanner";

export default function PromoBanner({ compProps }) {
  if (!compProps) return;
  console.log(compProps)
  const { bannerTitle, bannerDescription, bannerCtAs, bannerImage, layout } =  compProps.fields;

  const texts = bannerDescription.content[0].content[0].value;
  return (
    <section className="mt-5 ">
      <div className="container">
        <div className="detail-page text-center">
          {layout && (
            <TwoColumnBanner
              image={bannerImage}
              title={bannerTitle}
              description={bannerDescription}
              imageSide={layout}
              buttonCTA = {bannerCtAs}
            />
          )}
        </div>
      </div>
    </section>
  );
}
