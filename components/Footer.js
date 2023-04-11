import Link from "next/link";

export default function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content row row-cols-1 row-cols-lg-3">
                    <ul className="col list-unstyled ">
                        <li> <Link href="/">Wynn Resorts</Link></li>
                        <li><Link href="/">Privacy policy</Link></li>
                        <li><Link href="/">Cookie Notice</Link></li>
                    </ul>
                    <ul className="col list-unstyled ">
                        <li> <Link href="/">Wynn Las Vegas</Link></li>
                        <li><Link href="/">Encore Boston Harbor</Link></li>
                        <li><Link href="/">Wynn Palace Cotai</Link></li>
                        <li><Link href="/">Wynn Macau</Link></li>
                    </ul>
                    <ul className="col list-unstyled ">
                        <li><p>Wynn Resorts</p></li>
                        <li><p>3131 Las Vegas Blvd.</p></li>
                        <li><p>Las Vegas, NV 89109</p></li>
                        <li><p>+1 (702) 770-7555</p></li>
                    </ul>
                </div>
                <p className="copy-right"><span>&#169; </span>{new Date().getFullYear()} Wynn Resorts Holdings, LLC. All Rights Reserved.</p>
            </div>
        </footer>
    );
}