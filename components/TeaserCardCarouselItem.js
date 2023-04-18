import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function TeaserCardItem({ title, image, description }) {
  if (!title && !image && description) return;
  let imageRender = image !== undefined && image?.fields.file.url;
  return (
    <div className="col mb-3">
      <div className="card  border-0">
        {image !== undefined ? (
          <Image
            src={` https:${imageRender}`}
            width={414}
            height={332}
            className=" card-img-top carou-image   "
            alt="first content descriptions"
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
      </div>
    </div>
  );
}
export default TeaserCardItem;