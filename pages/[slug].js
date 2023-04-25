import {createClient} from 'contentful'
import React, { Fragment, useRouter } from 'react';
import RenderComponents from '../components/RenderComponents';
import PreviewExit from "../components/preview-exit";
import InvesterCanvas from '../components/invester-files-canvas';
import contentfulClient from '../utils/contentfulClient';

export async function getStaticPaths(){
  
  const client = contentfulClient();
  const res = await client.getEntries({content_type:'page'});
  
  const paths = res.items.map(item => {
        return  { params: { slug : item.fields.slug } } 
  });

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context){
 
  var client = contentfulClient(context.preview);

  const {items} = await client.getEntries({include: 10, content_type: 'page', 'fields.slug' : context.params.slug });

    return{
      props: {
        preview : context.preview || false,
        page: items[0],
        revalidate: 1
      }
    }
  }

export default function LandingPage({ page, preview }) {

  if(!page) {
    return (<div>Loading...</div>)
  }

  const {content} = page.fields;

  return (
    <Fragment>
       {preview && <PreviewExit/>}
       <RenderComponents components={content}></RenderComponents>
       
    </Fragment>
  )
}