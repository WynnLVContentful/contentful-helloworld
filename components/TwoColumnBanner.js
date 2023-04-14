import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import sideImages from "../public/farmer-image.jpg";
import PromoBannerHeader from "./promoBannerheader";
// import yonathan from "../public/farmer-image.jpg";
function TwoColumnBanner({ image, title, description, imageSide, buttonCTA }) {
  const texts = description.content[0].content[0].value;
  const imageRenderSide = imageSide.includes("Left")
    ? "reverse-position-image"
    : "content";

  return (
    <section className={`two-column mt-5`}>
      <div className={!imageSide.includes("default") && imageRenderSide}>
        <div className="two-column-image-left col-12 col-lg-6">
          {!imageSide.includes("default") && (
            <Image
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              src={"https://" + image.fields.file.url}
              alt={image.fields.description}
              className="left-side-image"
            />
          )}
        </div>
        <div
          className={`two-column-text-right ${
            imageSide.includes("default") ? "col-12" : "col-12 col-lg-6"
          } `}
        >
          <div className="column-content p-4">
            <h3
              className={`text-center mt-3  my-lg-1 ${
                imageSide.includes("default") && "header-resize"
              }`}
            >
              {title}
            </h3>
            <p className="mt-4">documentToReactComponents{texts}</p>
            {imageSide.includes("default") && <PromoBannerHeader buttonCTA ={buttonCTA}/>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoColumnBanner;
