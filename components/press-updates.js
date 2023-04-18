import Link from "next/link";
import { Fragment } from "react";
import PressUpdateList from "./press-updates-item";


function PressUpdate() {
  return (
    <Fragment>
      <section className="my-5">
        <div className="container">
          <h2>press updates</h2>
          <div className="press-list">
            <div className="row row-cols-1">
            {dumpData.map((item, index)=>(
               <PressUpdateList
                key={index}
                title = {item.title}
                lable = {item.lable}
                link= {item.link}
                linkTitle = {item.linkTitle}
               /> 
            ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default PressUpdate;
