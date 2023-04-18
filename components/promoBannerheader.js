import { Fragment } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function PromoBannerHeader({ buttonCTA }) {
  return <button className="btn btn-primary">{buttonCTA.text}</button>;
}
