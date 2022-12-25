import Link from "next/link";
//import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image'

export default function DiningCard({diner}){
    console.log(diner);

    const {title, slug, thumbnail} = diner.fields;

    return(
        <div className="card">
            <div className="featured">
                <Image src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width} 
                    height={thumbnail.fields.file.details.image.height} />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>
                        Description will go here
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
                `}
            </style>
        </div>
        
    )
}