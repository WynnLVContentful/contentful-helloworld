import {createClient} from 'contentful'
import React, { Fragment } from 'react';
import RenderComponents from '../components/RenderComponents';


export async function getStaticProps(){
 
  const client = createClient({
    space: "vsfvp3vjns8g",
    accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik"
  });

  const {items} = await client.getEntries({include: 10, content_type: 'page', 'fields.slug' : '/' });

  return{
    props: {
      page: items[0],
      revalidate: 1
    }
  }
}

export default function Home({page}) {
  const {content} = page.fields;
  
  return (
    <Fragment>
      <RenderComponents components={content}></RenderComponents>
    </Fragment>
  )
}