import { createClient } from 'contentful'
import DiningCard from '../components/DinerCard';
import Logo from '../components/Logo';
import HeroCarousel from '../components/HeroCarousel';
import Navigation from '../components/Navigation';
import PageDetail from '../components/PageDetail';

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

export default function Recipes({diners}) {
  console.log(diners)
  return (
    <div>
      <Logo></Logo>
      <Navigation>
        
      </Navigation>
      <HeroCarousel></HeroCarousel>
      <PageDetail></PageDetail>
    </div>
  )
}