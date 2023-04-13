import { createClient } from 'contentful'
import DiningCard from '../components/DinerCard';
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
// export async function getStaticProps(){
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
//   });

//   const res = await client.getEntries({content_type: 'dining'});

//   return{
//     props: {
//       diners: res.items,
//       revalidate: 1
//     }
//   }
// }
import { UserData } from '../components/Data';
import HorizontalOneSingle from '../components/sideBarCanvasSingle';
export default function Recipes({ diners }) {
  console.log(diners)
  

  return (
    <Fragment>
      <HeroCarousel />
      <PageDetail />
      <ThreeColumnBanner class="-borderless" />
      <PromoBanner />
      <TwoColumnBanner />
      <ThreeColumnBanner />
      <TeaserCardCarousel />
      
    </Fragment>
  )
}