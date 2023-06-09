import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import {createClient} from 'contentful'
import { useRouter } from "next/router";
export  default function Navigation() {
    let router = useRouter()
    const [links, setLink] = useState([]);
    async function fetchData() {
        try {
            const client = createClient({
                space: "vsfvp3vjns8g",
                accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik"
              });
        
            const {items} = await client.getEntries({content_type:'navigation', 'fields.slug' : 'header-nav'});
            const lis = items[0].fields.menus.map(item => {
                const navActive = router.query.slug == undefined ? "/" : router.query.slug 
                return  (
                  <li className="nav-item" key={item.sys.id}>
                    <Link href={item.fields.url} className={item.fields.url.includes(navActive) ? "nav-link active-nav" : "nav-link" }>
                        {item.fields.label}
                    </Link>
                  </li>
                )});
                
                setLink(lis);

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => { 
          fetchData();
    }, [router.query.slug]);

    return (
        <nav>
            <ul className="navbar-nav  d-flex">
                {links}                
            </ul> 
        </nav>
    );
}
