import {createClient} from 'contentful'
import DiningCard from '../components/DinerCard';

export async function getStaticProps(){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  const res = await client.getEntries({content_type: 'dining'});

  return{
    props: {
      diners: res.items,
      revalidate: 1
    }
  }
}

export default function Recipes({diners}) {
  console.log(diners)
  return (
    <div className="diner-list">
      {diners.map(diner => (
        <DiningCard key={diner.sys.key} diner={diner} />
      ))}

      <style jsx>{`
          .diner-list{
            display:grid;
            grid-template-columns: auto auto auto;
            grid-gap:10px;
          }
        `}
      </style>

    </div>
    
  )
}