import Image from "next/image";
import sideImages from "../public/farmer-image.jpg";
// import yonathan from "../public/farmer-image.jpg";
function TwoColumnBanner() {
    return (
        <section className="two-column mt-5">
            <div className="container">
                <div className="content">
                    <div className="two-column-image-left">
                        <Image width={536} height={332} src={sideImages} alt="farmer-picture" className="left-side-image" />
                    </div>
                    <div className="two-column-text-right">
                        <div className="column-content p-4">
                            <h3 className="text-center mt-3  my-lg-1">Corporate Governance</h3>
                            <p className="mt-4">A best-in-class company bears special responsibility
                                to its people, to the communities in which it operates,
                                and to helping make the world a better place. Overlaid
                                by our commitment to strong corporate governance, our
                                efforts in social responsibility necessarily rest upon
                                three pillars: Our People, Our Communities, and Our Planet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default TwoColumnBanner;