import {createClient} from 'contentful'

import Logo from '../components/Logo';
import HeroCarousel from '../components/HeroCarousel';
import Navigation from '../components/Navigation';
import PageDetail from '../components/PageDetail';
import ThreeColumnBanner from '../components/ThreeColumnBanner';
import TwoColumnBanner from '../components/TwoColumnBanner';
import React, { Fragment } from 'react';
import TeaserCardCarousel from '../components/TeaserCardCarousel';
import PromoBanner from '../components/PromoBanner';
import { Watercanvas } from '../components/WaterCanvas';
import HorizontalOne from '../components/sideBarCanvas';
import TwoColumnCanvas from '../components/twoColumnCanvas';

export async function getStaticProps(){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  const res = await client.getEntry('5dkVeUwWFZ5juxb4xH6DpW');

  return{
    props: {
      homePage: res,
      revalidate: 1
    }
  }
}

export default function Home({homePage}) {
  const {content} = homePage.fields;
  return (
    <Fragment>
      {
          content.map(comp => {    
            console.log(comp); 
            var jsx;
            switch (comp.sys.contentType.sys.id) {
              
              case "header":
                jsx = <Logo key={comp.sys.id} compProps={comp}  />
                break;
              case "heroImages":
               
                jsx = <HeroCarousel key={comp.sys.id} compProps={comp}></HeroCarousel>
                break;
              case "titleAndDescription":               
                jsx = <PageDetail key={comp.sys.id} compProps={comp}></PageDetail>
                break;
              case "promoBanner":               
                jsx = <PromoBanner key={comp.sys.id} compProps={comp}></PromoBanner>                
                break;
            }
            return jsx
         }) 
      }
    </Fragment>
  )
}