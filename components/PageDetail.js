import { Fragment } from "react";
export default function PageDetail(props) {

    return (
        <section className="mt-5 ">
            <div className="container">
                <div className="detail-page text-center">
                    <h1>Wynn Resorts Targets Net-Zero Operations</h1>
                    <p> Wynn Resorts announced three aggressive goals in 2020,
                        committing to action in response to the global threat
                        of climate change. These goals center our core values
                        around our purpose: to benefit the environment, our
                        guests and employees, and the communities in which we
                        live and operate.Wynn Resorts is working toward the
                        following three milestones:</p>
                </div>
                <div className={props.remove + " includes"}>
                    <div>
                        <button className="btn btn-primary">
                            SASB index
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-primary">
                            GRI DISCLOSURE
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}