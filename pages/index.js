import {createClient} from 'contentful'
import DiningCard from '../components/DinerCard';
import Logo from '../components/Logo';
import HeroCarousel from '../components/HeroCarousel';
import Navigation from '../components/Navigation';
import PageDetail from '../components/PageDetail';

export async function getStaticProps(){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  const res = await client.getEntry('5dkVeUwWFZ5juxb4xH6DpW');

  //console.log(res);
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
    <div>
      {
          content.map(comp => {     
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
            }
            return jsx
         }) 
      }
    </div>
  )
}