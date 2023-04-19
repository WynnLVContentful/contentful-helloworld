import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import renderOptions from "./RichtextRenderOptions";

export default function TextBlock({ compProps }) {
  console.log(compProps)
  const { content, align } = compProps.fields;
    const positionAlign = align.toLowerCase()
  return (
    <section className="text-block">
      <div className="container">
        <h2>{compProps.fields.title}</h2>
        <div className={`one-column ${align ? "text-"+positionAlign : undefined}  `}>
          {documentToReactComponents(content, renderOptions)}
        </div>
      </div>
    </section>
  );
}
