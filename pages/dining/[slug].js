import {createClient} from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const getStaticPaths = async () => {
  
  const res = await client.getEntries({content_type: 'dining'});

  const paths = res.items.map(item => {
    return{
      params: {slug: item.fields.slug}
    }    
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  
  const {items} = await client.getEntries({content_type: 'dining', 'fields.slug' : params.slug  });

  return{
    props: {diner: items[0]}
  }
}

export default function RecipeDetails({diner}) {

  const {featuredImage, title, logDescription, specials } = diner.fields

  console.log(specials);

  return (
    <div>
      <div className='banner'>
       <Image src={'https:' + featuredImage.fields.file.url}
                    width={featuredImage.fields.file.details.image.width} 
                    height={featuredImage.fields.file.details.image.height}
                    alt={featuredImage.fields.title} />       
        
      </div>
      <div className='info'>
        <h1>{title}</h1>
        <p>{documentToReactComponents(logDescription)}</p>
        <div>
          <h3>Specials:</h3>
          <ul>
          {specials.map((s) => 
            <li>{s}</li>
          )}
          </ul>
        </div>
        <Link href="/">Back</Link>
      </div>

      <style jsx>{`
        
      `}
      </style>
    </div>
  )
}