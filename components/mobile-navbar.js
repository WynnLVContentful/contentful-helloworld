import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from 'contentful'
import { useRouter } from "next/router";

function MobileNav(props) {
    let router = useRouter()
    const checkMobileNav = props.toggleFeature ? "open" : "close";
    const [links, setLink] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const client = createClient({
                    space: "vsfvp3vjns8g",
                    accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik"
                });

                const { items } = await client.getEntries({ content_type: 'navigation', 'fields.slug': 'header-nav' });
                const lis = items[0].fields.menus.map(item => {
                    console.log(item.fields.url)

                    const navActive = router.query.slug == undefined ? "/" : router.query.slug
                    setTimeout(() => {
                        console.log(item.fields.url, "test => ", item.fields.url.includes(navActive))
                    }, 500);
                    return (
                        <li className="nav-item" key={item.sys.id}>
                            <Link href={item.fields.url} className={item.fields.url.includes(navActive) ? "nav-link active-nav" : "nav-link"}>
                                {item.fields.label}
                            </Link>
                        </li>
                    )
                });

                setLink(lis);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [router.query.slug]);
    return (<Fragment>
        <section className={`mobile-nav mobile-nav-${checkMobileNav}`} onClick={(e) => props.closeIt(e)}>
            <ul className="nav-lists">
                {links}
            </ul>
        </section>
    </Fragment>);
}

export default MobileNav;