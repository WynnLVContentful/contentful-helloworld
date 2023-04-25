import {createClient} from 'contentful'
import React, { Fragment, useRouter } from 'react';
import RenderComponents from '../components/RenderComponents';
import PreviewExit from "../components/preview-exit";
import InvesterCanvas from '../components/invester-files-canvas';
import contentfulClient from '../utils/contentfulClient';
import NotFound from './404';

export async function getStaticPaths(){
  
  const client = contentfulClient();
  const res = await client.getEntries({content_type:'page'});
  
  const paths = res.items.map(item => {
        return  { params: { slug : item.fields.slug } } 
  });

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context){
 
  var client = contentfulClient(context.preview);

  const {items} = await client.getEntries({include: 10, content_type: 'page', 'fields.slug' : context.params.slug });

if (items.length == 0){
  return{
    props: {},
    notFound:true
  }
  
}

    return{
      props: {
        preview : context.preview || false,
        page: items[0],
        revalidate: 1
      }
    }
  }

export default function LandingPage({ page, preview }) {
let content = []
  if(!page) {
    return (<div>Loading...</div>)
  }
  else if(page.length == 0){
    return (<NotFound/>)
  }else{
     content = page.fields.content;
  }
  return (
    <Fragment>
       {preview && <PreviewExit/>}
       <RenderComponents components={content}></RenderComponents>
    </Fragment>
  )
}