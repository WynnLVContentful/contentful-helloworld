import {createClient} from 'contentful'
import React, { Fragment } from 'react';
import RenderComponents from '../components/RenderComponents';

import InvesterCanvas from '../components/invester-files-canvas';

export async function getStaticPaths(){
  const client = createClient({
    space: "vsfvp3vjns8g",
    accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik"
  });

  const res = await client.getEntries({content_type:'page'});
  
  const paths = res.items.map(item => {
        return  { params: { slug : item.fields.slug } } 
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
    const client = createClient({
      space: "vsfvp3vjns8g",
      accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik"
    });
  
    const {items} = await client.getEntries({include: 10, content_type: 'page', 'fields.slug' : params.slug });

    console.log(items);

    if(!items || items.length <= 0){
      return{
        notFound: true
      };
    }
  
    return{
      props: {
        page: items[0],
        revalidate: 1
      }
    }
  }

export default function LandingPage({page}) {
  const {content} = page.fields;

  return (
    <Fragment>
      <RenderComponents components={content}></RenderComponents>
    </Fragment>
  )
}