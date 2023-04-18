
export default function ThreeColumnBanner({compProps}) {
    if (!compProps) return;
 
    // ${props && props.class}
    return (
        <section className={`three-column pb-3 mt-5`}>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-3 g-3 three-column-list ">
                    <div class="col">
                        <div class="card border border-gray shadow-sm mb-1 rounded">
                            <div className="card-title ">
                                <h3 class="card-title text-center">Net-Zero by 2050</h3>
                            </div>
                            <div class="card-body">
                                <li><span class="card-text">To reduce or offset all carbon dioxide (CO2) produced by our operations no later than 2050.</span></li>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border border-none  shadow-sm  mb-1 rounded">
                            <div className="card-title">
                                <h3 class="card-title text-center">Carbon Dioxide Emissions Peak by 2030</h3>
                            </div>
                            <div class="card-body">
                                <li><span class="card-text ">Human Capital Management</span></li>
                                <li><span class="card-text">Human Capital Management</span></li>
                                <li><span class="card-text">Human Capital Management</span></li>
                                <li><span class="card-text">Human Capital Management</span></li>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border border-none  shadow-sm  mb-1  rounded">
                            <div className="card-title">
                                <h3 class="card-title text-center">50% Renewable Energy Procurement by 2030</h3>
                            </div>
                            <div class="card-body">
                                <li><span class="card-text ">Human Capital Management</span></li>
                                <li><span class="card-text">Human Capital Management</span></li>
                                <li><span class="card-text">Human Capital Management</span></li>
                                <li><span class="card-text ">Human Capital Management</span></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}