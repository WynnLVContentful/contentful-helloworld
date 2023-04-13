import PageDetail from "./PageDetail";

export default function PromoBanner(props) {

    return (
        <section className="mt-5 ">
            <div className="container">
                <div className="detail-page text-center">
                    <h1>{props.data == undefined ? 'Wynn Resorts Targets Net-Zero Operations' : props.data.title}</h1>
                    <p> {props.data == undefined ? ' Wynn Resorts announced three aggressive goals in 2020, ommitting to action in response to the global threat of climate change. These goals center our core values around our purpose: to benefit the environment, our guests and employees, and the communities in which we live and operate.Wynn Resorts is working toward the following three milestones:'
                        : props.data.description}</p>
                </div>
                <div className=" includes">
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