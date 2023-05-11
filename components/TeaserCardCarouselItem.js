import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BsChevronRight,
  BsChevronLeft,
  BsCaretRightFill,
} from "react-icons/bs";
import { useEffect } from "react";
function TeaserCardItem({ title, image, description, layout, button = null }) {
  if (!title && !image && !description & !button) return;
  let imageRender = image !== undefined && image?.fields.file.url;
  return (
    <div className=" d-flex align-items-stretch col mb-3">
      <div className="card  border-0 limit-width-image">
        {image !== undefined ? (
          <Image
            src={image && `https:${imageRender}`}
            width={414}
            height={332}
            className=" card-img-top carou-image   "
            alt={description && description}
          />
        ) : (
          <p className="placeholder"></p>
        )}
        <div className="card-body">
          <div className="card-title">
            <h3 className="text-center mb-4">{title}</h3>
          </div>
          <div className="content">
            <div className="text-left content_list text-center">
              {documentToReactComponents(description)}
            </div>
          </div>
        </div>
        {
          (layout == "imageGallary")
            ?
            (button?.length > 0) ? (
              <div className="card-footer image-gallary-footer text-center bg-white">
                <div className="container">
                  {button?.map((item) =>
                    item.fields.ctaStyle == "Text" ? (
                      <p className="text-form">
                        <Link
                          href={item.fields.target}
                          className="link-detail text-center text-dark text-uppercase"
                        >
                          {item.fields.text}
                          <span className="font-left">
                            <BsCaretRightFill />
                          </span>
                        </Link>
                      </p>
                    ) : (
                      <p className="text-center button-form">
                        <Link
                          href={item.fields.target}
                          className="text-center text-uppercase"
                        >
                          {item.fields.text}
                        </Link>
                      </p>
                    )
                  )}
                </div>
              </div>
            ) : (
              <div className="card-footer image-gallary-footer text-center bg-white">
                <div className="set-height"> </div>
              </div>
            ) : <span></span>}
      </div>
    </div>
  );
}
export default TeaserCardItem;
