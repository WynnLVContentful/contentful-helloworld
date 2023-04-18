import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function TextBlock({ compProps }) {
  const {content, align} = compProps.fields;

  return (
    <section className="text-block" style={'text-align:'+ align}>
      <p>
        {documentToReactComponents(content)}
      </p>
    </section>
  );
}
