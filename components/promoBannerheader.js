import { Fragment } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function PromoBannerHeader({ buttonCTA }) {
  return (
    <div className=" includes">
      {buttonCTA.map((item) => (
        <div>
          <button className="btn btn-primary">{item.fields.text}</button>
        </div>
      ))}
    </div>
  );
}
