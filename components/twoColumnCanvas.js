function TwoColumnCanvas(props) {
    return (<section className="Two-column-Canvas">
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 three-column-canvas">
                <div className="col list">
                    {props.firstChild}
                </div>
                <div className="col list" >
                    {props.secondChild}
                </div>
            </div>
        </div>
    </section>);
}

export default TwoColumnCanvas;