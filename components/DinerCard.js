import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image'

export default function DiningCard({diner}){

    const {title, slug, shortDescription, thumbnail} = diner.fields;

    return(
        <div className="card">
            <div className="featured">
                <Image src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width} 
                    height={thumbnail.fields.file.details.image.height} 
                    alt={thumbnail.fields.title} />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>
                        {documentToReactComponents(shortDescription)}
                    </p>
                </div>
                <div className="actions">
                    <Link href={'/dining/' + slug} >View Details</Link>
                </div>
            </div>

            <style jsx>{`
                    .card{
                        background-color:white;                        
                    }

                    .card .content{
                        text-align:center;
                    }
                    .card .featured img{
                        width: 100%;
                    }
                    .actions{
                        margin-bottom: 1px;
                    }
                `}
            </style>
        </div>
        
    )
}