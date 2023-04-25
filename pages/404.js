import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
const logoOptional = "//images.ctfassets.net/vsfvp3vjns8g/18c0QqdVs9b54wlSEqDJqK/0ddbdb5c111472baac7e45862e950030/Fill_1.svg"
function NotFound() {
    return ( <section>
        <Header logo = {logoOptional}/>
                <div className="not-found">
                        <div className="container">
                            <p>Page not Found </p>
                           <div className="link-return-home">
                           <Link href="/">Return to home page</Link>
                           </div>
                        </div>

                </div>
        <Footer/>
    </section> );
}

export default NotFound;