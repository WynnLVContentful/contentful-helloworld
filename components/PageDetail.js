import { Fragment } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function PageDetail({ compProps }) {
  if (!compProps) return;
  const { title, text } = compProps.fields;
  const texts = text;
  compProps.fields.text.content.map((item) => {

    (item.content.map((items) => {
       (items)
    }))
  })
  const textsContents = text.content;
  let fileType = {
    title: title,
  };
  textsContents.map((item) => {
    if (item.nodeType =="unordered-list"){
     
      fileType['files'] = item.content

    }else{
   
    if((item.content[0]?.value !== "\n\n")){
      fileType[item.nodeType] =  item.content;
       }
    }
  });

  // files renders
  const files = fileType['files'] ;
  const para =  fileType['paragraph'] ;


  function DetailsThreecolumncontent() {
    return (
      <Fragment>
        <div className="card-title ">
          <h3 className="card-title text-center">{fileType.title}</h3>
        </div>
        <div className="card-body">
            <p>{para?.map ((item) => item.value)}</p>
            <ul className="card-text">
              {files?.map((item,index) => (
                <li key={index}>{item.content[0].content[0].value}</li>
              ))}
            </ul>
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
              {documentToReactComponents(texts)}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }


  if (compProps.fields.layout == "Page Detail") {

    return (<Fragment>
      <PageDetailcontent />
    </Fragment>);
  } else if (compProps.fields.layout == "Content") {
    return <DetailsThreecolumncontent />;
  }
}
