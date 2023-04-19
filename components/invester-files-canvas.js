import React, { Fragment } from "react";
import PieChart from "./DonutCanvas";
import { Watercanvas } from "./WaterCanvas";
import HorizontalOne from "./sideBarCanvas";
import HorizontalOneSingle from "./sideBarCanvasSingle";
import TwoColumnCanvas from "./twoColumnCanvas";
function InvesterCanvas() {
  return (
    <Fragment>
      <PieChart />
      <Watercanvas />
      <HorizontalOne />
      <TwoColumnCanvas
        firstChild={<Watercanvas />}
        secondChild={<HorizontalOneSingle />}
      />
    </Fragment>
  );
}
export default InvesterCanvas;
