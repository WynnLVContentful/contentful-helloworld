import Image from "next/image";
import PageDetail from "./PageDetail";

function ThreeColumnLayout({ compProps }) {
    if(!compProps) return;
  const { column1, column2, column3 } = compProps.fields;
//   console.log(column1);
  return (
    <section className={`three-column pb-3 mt-5`}>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 g-3 three-column-list ">
          <div className="col">
            <div class="card border border-gray shadow-sm mb-1 rounded">
              <div className="two-column-image-left">
                <PageDetail compProps={column1} />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card border border-gray shadow-sm mb-1 rounded">
              <div className="two-column-image-left">
                <PageDetail compProps={column2} />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card border border-gray shadow-sm mb-1 rounded">
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
