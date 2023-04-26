import Image from "next/image";
import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import sideImages from "../public/farmer-image.jpg";
import PromoBannerHeader from "./promoBannerheader";

function TwoColumnBanner({ image, title, description, imageSide, buttonCTA }) {
  const texts = description;
  const imageRenderSide = imageSide.includes("Left")
    ? "reverse-position-image"
    : "content";

  return (
    <section className={`two-column mt-1`}>
      <div
        className={!imageSide.includes("default") ? imageRenderSide : undefined}
      >
        <div className="two-column-image-left col-12 col-lg-6">
          {!imageSide.includes("default") || image != undefined ? (
            <Image
              width={350}
              height={200}
              src={image && "https:" + image?.fields?.file.url}
              alt={image && image?.fields?.description}
              className="left-side-image"
            />
          ) : (
            <span></span>
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
              {title !== undefined && title}
            </h3>
            <div>{documentToReactComponents(texts)}</div>
            <div className=" includes">
              <div>
                {imageSide.includes("default") && buttonCTA !== undefined &&
                  buttonCTA.map((item) => (
                    <PromoBannerHeader
                      buttonCTA={item.fields}
                      key={item.sys.id}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoColumnBanner;
