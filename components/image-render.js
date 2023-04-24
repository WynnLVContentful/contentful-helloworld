import Image from "next/image";
import { Fragment } from "react";
import images1 from "../public/hero-home-web.jpeg";
function ImageResponsible({ compProps }) {
  if (!compProps) return;
  const { imageResponse } = compProps.fields;
  return (
    <Fragment>
      <div className="container">
        <div className="image-holder d-flex justify-content-center">
          <Image
            src={"https:" + imageResponse.fields.file.url}
            width={1350}
            height={450}
            alt={compProps.fields.description}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ImageResponsible;
