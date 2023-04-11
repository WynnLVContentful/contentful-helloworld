import {createClient} from 'contentful'
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
  console.log(homePage.fields);
  const {content} = homePage.fields;
  console.log(content);
  

  return (
    <div>
      {
          content.map(comp => {     
            var jsx;
            switch (comp.sys.contentType.sys.id) {
              
              case "header":
                console.log(comp.sys.contentType.sys.id);
                jsx = <Logo key={comp.sys.id}></Logo>
                break;
              case "heroImages":
                jsx = <HeroCarousel></HeroCarousel>
                break;
              case "pageDetail":
                jsx = <PageDetail></PageDetail>
                break;
            }
            return jsx
         }) 
      }
    </div>
  )
}