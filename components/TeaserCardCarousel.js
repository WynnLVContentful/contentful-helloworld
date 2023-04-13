import Image from "next/image";
import firstCard from "../public/wynn resposible first.jpeg"
import Link from "next/link";
export default function TeaserCardCarousel() {

    return (
        <section className="teaser-card">
            <div className="container">
                <h2 className="mb-5">Information Address</h2>
                <div className="teaser-card-carousel">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 teaser-card-holder">
                        <div className="col mb-3">
                            <div className="card  border-0    ">
                                <Image src={firstCard} width={414} height={332} className=" card-img-top carou-image   " alt="first content descriptions" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="text-left mb-4">OUR PEOPLE</h3>
                                    </div>
                                    <div className="content">
                                        <ul className="text-left content_list">
                                            <li><span class="card-text content_item">Human Capital Management</span></li>
                                            <li><span class="card-text content_item">Employee Benefits</span></li>
                                            <li><span class="card-text content_item">Diversity and Inclusion</span></li>
                                            <li><span class="card-text content_item">Training and Developmen</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <Link href="detail-id-page/test1" className="link-footer-card btn-link-item">
                                        <span className="btn-link">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3 ">
                            <div className="card  border-0    ">
                                <Image src={firstCard} width={414} height={332} className="   card-img-top carou-image " alt="first content descriptions" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="text-left mb-4">OUR PEOPLE</h3>
                                    </div>
                                    <div className="content">
                                        <ul className="text-left content_list">
                                            <li><span class="card-text content_item">Human Capital Management</span></li>
                                            <li><span class="card-text content_item">Employee Benefits</span></li>
                                            <li><span class="card-text content_item">Diversity and Inclusion</span></li>
                                            <li><span class="card-text content_item">Training and Developmen</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <Link href="detail-id-page/test1" className="link-footer-card btn-link-item">
                                        <span className="btn-link">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3 ">
                            <div className="card  border-0    ">
                                <Image src={firstCard} width={414} height={332} className="   card-img-top carou-image " alt="first content descriptions" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="text-left mb-4">OUR PEOPLE</h3>
                                    </div>
                                    <div className="content">
                                        <ul className="text-left content_list">
                                            <li><span class="card-text content_item">Human Capital Management</span></li>
                                            <li><span class="card-text content_item">Employee Benefits</span></li>
                                            <li><span class="card-text content_item">Diversity and Inclusion</span></li>
                                            <li><span class="card-text content_item">Training and Developmen</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <Link href="detail-id-page/test1" className="link-footer-card btn-link-item">
                                        <span className="btn-link">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3 ">
                            <div className="card  border-0    ">
                                <Image src={firstCard} width={414} height={332} className="   card-img-top carou-image " alt="first content descriptions" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="text-left mb-4">OUR PEOPLE</h3>
                                    </div>
                                    <div className="content">
                                        <ul className="text-left content_list">
                                            <li><span class="card-text content_item">Human Capital Management</span></li>
                                            <li><span class="card-text content_item">Employee Benefits</span></li>
                                            <li><span class="card-text content_item">Diversity and Inclusion</span></li>
                                            <li><span class="card-text content_item">Training and Developmen</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <Link href="detail-id-page/test1" className="link-footer-card btn-link-item">
                                        <span className="btn-link">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}