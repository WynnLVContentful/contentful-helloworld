import { Fragment } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function PageDetail({ compProps }) {
  if (!compProps) return;
  console.log(compProps)
  const { title, text } = compProps.fields;
  const texts = text.content[0].content[0].value;
  const textsContents = text.content;
  let fileType = {};
  textsContents.map((item) => {
    fileType[item.nodeType] = item.content;
  });
//   console.log(fileType);
  function DetailsThreecolumncontent() {
    return (
      <Fragment>
        <div className="card-title ">
          <h3 class="card-title text-center">Net-Zero by 2050</h3>
        </div>
        <div class="card-body">
          <li>
            <span class="card-text">
              To reduce or offset all carbon dioxide (CO2) produced by our
              operations no later than 2050.
            </span>
          </li>
        </div>
      </Fragment>
    );
  }
  function PageDetailcontent() {
    return (
      <Fragment>
        <section className="mt-5 ">
          <div className="container">
            <div className="detail-page text-center">
              <h1>{title}</h1>
              <p>documentToReactComponents{texts}</p>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
  if (compProps.fields.layout == "Page Detail") {
    return <PageDetailcontent />;
  } else if (compProps.fields.layout == "Content") {
    return <DetailsThreecolumncontent />;
  }
}
