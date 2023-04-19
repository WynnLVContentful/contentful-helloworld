import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Footer() {
  const [columns, setColumns] = useState([]);
  async function fetchData() {
    try {
      const client = createClient({
        space: "vsfvp3vjns8g",
        accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik",
      });

      const { items } = await client.getEntries({
        content_type: "footerNavigation",
        "fields.title": "Footer",
        include: 10,
      });
      setColumns(items[0].fields.columns);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content row row-cols-1 row-cols-lg-3">
          {columns.map((column) => {
            switch (column.sys.contentType.sys.id) {
              case "navigation":
                return (
                  <ul className="col list-unstyled ">
                    {column.fields.menus.map((menu) => {
                      return (
                        <li>
                          <Link href={menu.fields.url}>
                            {menu.fields.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                );
              case "textBlock":
                return (
                  <div className="col list-unstyled ">
                   { documentToReactComponents(column.fields.content)}
                  </div>
                );
            }
          })}
        </div>

        <p className="copy-right">
          <span>&#169; </span>
          {new Date().getFullYear()} Wynn Resorts Holdings, LLC. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
