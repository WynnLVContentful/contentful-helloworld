import Link from "next/link";
import { Fragment } from "react";
import PressUpdateList from "./press-updates-item";


function PressUpdate({ compProps }) {
  if (!compProps) return;
    const {label, linkAddress,linkTextTitle, titles} = compProps.fields;
  return (
    <Fragment>
      <section className="my-5">
        <div className="container">
          <div className="press-list">
            <div className="row row-cols-1">
               <PressUpdateList
                title = {titles}
                lable = {label}
                link= {linkAddress}
                linkTitle = {linkTextTitle}
               /> 
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default PressUpdate;
