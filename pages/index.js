import { createClient } from "contentful";
import React, { Fragment } from "react";
import RenderComponents from "../components/RenderComponents";
import PreviewExit from "../components/preview-exit";
import contentfulClient from "../utils/contentfulClient";
import Head from 'next/head'
export async function getStaticProps(context) {
  
  var client = contentfulClient(context.preview);
  
  const { items } = await client.getEntries({
    include: 10,
    content_type: "page",
    "fields.slug": "/",
  });
  if (items.length == 0){
    return{
      props: {},
      notFound:true
    }
    
  }
  return {
    props: {
      preview : context.preview || false,
      page: items[0],
      revalidate: 1,
    },
  };
}

export default function Home({ page, preview }) {
  const { content } = page.fields;
  return (
    <Fragment>
       <Head>
        <title>{page.fields.pageMetadata !== undefined &&  page.fields.pageMetadata.fields.title}</title>
      </Head>
      {preview && <PreviewExit/>}
      <RenderComponents components={content}></RenderComponents>
    </Fragment>
  );
}
