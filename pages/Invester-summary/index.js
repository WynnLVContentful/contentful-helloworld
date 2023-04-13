import { Fragment } from "react";
import PromoBanner from "../../components/PromoBanner";
import HeroCarousel from "../../components/HeroCarousel";
import ThreeColumnBanner from "../../components/ThreeColumnBanner";
import PageDetail from "../../components/PageDetail";
function InvesterSummary() {
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
        </Fragment>
    );
}

export default InvesterSummary;