import React, { Fragment } from "react";
import PromoBanner from "../../components/PromoBanner";
import HeroCarousel from "../../components/HeroCarousel";
import ThreeColumnBanner from "../../components/ThreeColumnBanner";
import PageDetail from "../../components/PageDetail";
import { Watercanvas } from "../../components/WaterCanvas";
import TwoColumnCanvas from "../../components/twoColumnCanvas";
import HorizontalOne from "../../components/sideBarCanvas";
import HorizontalOneSingle from "../../components/sideBarCanvasSingle";
function InvesterSummary() {
    const LazyExample = React.lazy(() => import('../../components/DonutCanvas'));
    const data = {
        title: "Investor Summary",
        description: ""
    }
    const secondData = {
        title: "",
        description: "Overlaid by our commitment to strong corporate governance, our efforts in social responsibility necessarily rest upon three pillars: Our People, Our Communities, and Our Planet."
    }
    return (
        <Fragment>
            <HeroCarousel />
            <PromoBanner data={data} />
            <PageDetail data={secondData} />
            <ThreeColumnBanner class="-borderless" />
            <React.Suspense fallback={<div div > Loading...</div >}>
                <LazyExample />
            </React.Suspense >
            <Watercanvas />
            <HorizontalOne />
            <TwoColumnCanvas firstChild={<Watercanvas />} secondChild={<HorizontalOneSingle />} />
        </Fragment>
    );
}

export default InvesterSummary;