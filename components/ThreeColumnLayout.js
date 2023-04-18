import Image from "next/image";
import PageDetail from "./PageDetail";

function ThreeColumnLayout({ compProps }) {
    if(!compProps) return;
  const { column1, column2, column3 } = compProps.fields;
  let layoutFormat;
 if (compProps.fields.layout == "White BG"){
  layoutFormat= '-borderless'
 }else if (compProps.fields.layout == "Brown BG"){
  layoutFormat= ""
 }
  return (
    <section className={`three-column${layoutFormat} pb-3 mt-5`}>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 g-3 three-column-list ">
          <div className="col">
            <div className="card border border-gray shadow-sm mb-1 rounded">
              <div className="two-column-image-left">
                <PageDetail compProps={column1} />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border border-gray shadow-sm mb-1 rounded">
              <div className="two-column-image-left">
                <PageDetail compProps={column2} />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border border-gray shadow-sm mb-1 rounded">
              <div className="two-column-image-left">
                <PageDetail compProps={column3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeColumnLayout;
