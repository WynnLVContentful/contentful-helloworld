import Image from "next/image";

function ThreeColumnLayout({comProps}) {

    return (
        <section className="two-column reverse-position-image mt-5">
            <div className="container">
                <div className="reverse-position-image">
                    <div className="two-column-image-left">
                       
                    </div>
                    <div className="two-column-text-right">
                        
                    </div>
                    <div className="two-column-image-left">
                       
                    </div>
                </div>
            </div>
        </section>);
}

export default ThreeColumnLayout;