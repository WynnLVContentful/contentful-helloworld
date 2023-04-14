import { Fragment } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function PromoBannerHeader({buttonCTA}) {
    buttonCTA.map((item) => {
            console.log(item)
    })
  return (
    <div className=" includes">
      <div>
        <button className="btn btn-primary">SASB index</button>
      </div>
      <div>
        <button className="btn btn-primary">GRI DIddSCLOSURE</button>
      </div>
    </div>
  );
}
