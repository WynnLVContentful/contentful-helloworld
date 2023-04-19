import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import renderOptions from "./RichtextRenderOptions";

export default function TextBlock({ compProps }) {

  const {content, align} = compProps.fields;

  return (
    <section className="text-block">
        {documentToReactComponents(content, renderOptions)}      
    </section>
  );
}
