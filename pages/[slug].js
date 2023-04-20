import { createClient } from "contentful";
import React, { Fragment } from "react";
import RenderComponents from "../components/RenderComponents";

import InvesterCanvas from "../components/invester-files-canvas";
import PreviewExit from "../components/preview-exit";

export async function getStaticPaths() {
  const client = createClient({
    space: "vsfvp3vjns8g",
    accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik",
  });

  const res = await client.getEntries({ content_type: "page" });

  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const contentfulClients = createClient({
    space: "vsfvp3vjns8g",
    accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik",
  });
  const previewsContent = createClient({
    space: "vsfvp3vjns8g",
    environment: "master", // defaults to 'master' if not set
    accessToken: "RgsQUYjSQI1_FA6Sf2IMlC1yPaWqlhOhUvWhAaq8g1c",
    host: "preview.contentful.com",
  });
  const client = context.preview ? previewsContent : contentfulClients;
  const { items } = await client.getEntries({
    include: 10,
    content_type: "page",
    "fields.slug": context.params.slug,
  });
  return {
    props: {
      preview : context.preview || false,
      page: items[0],
      revalidate: 1,
    },
  };
}

export default function LandingPage({ page,preview }) {
  const { content } = page.fields;

  return (
    <Fragment>
      {preview && <PreviewExit/>}
      <RenderComponents components={content}></RenderComponents>
    </Fragment>
  );
}
