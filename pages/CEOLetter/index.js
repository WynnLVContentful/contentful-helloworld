import { Fragment } from "react";
import HeroCarousel from '../../components/HeroCarousel';
import PageDetail from "../../components/PageDetail";
function LetterCEO() {
    const data = {
        title: "A Message from Craig Billings, CEO of Wynn Resorts",
        description: "Our annual ESG report is incredibly important to me, and to our Company. Within our report I believe you will find that Wynn Resorts brings the same level of robust effort and dedication to our ESG efforts as we do to all our business operations.Those efforts align with several key pillars of our business Our people Our communities Our planet"
    }
    return (
        <Fragment>
            <HeroCarousel />
            <PageDetail data={data} />
        </Fragment>
    );
}

export default LetterCEO;