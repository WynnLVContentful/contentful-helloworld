import Link from "next/link";
import { Fragment } from "react";
const monthData = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function PressUpdateList({ title, lable, link, linkTitle }) {
  function dateFormat(dates) {
    let datesToFormat = new Date(dates);
    const month = datesToFormat.getMonth();
    const date = datesToFormat.getDate();
    const year = datesToFormat.getFullYear();
    return `${monthData[month]} ${date} ${year}`;
  }

  return (
    <Fragment>
      <div className="col">
        <h3 className="press-list-title text-center">{title}</h3>
        <label className="press-list-label">{dateFormat(lable)}</label>
        <p className="press-list-link">
          <Link href={link}>{linkTitle} </Link>
        </p>
      </div>
    </Fragment>
  );
}
export default PressUpdateList;
