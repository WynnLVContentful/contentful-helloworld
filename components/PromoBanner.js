import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from "next/image";


export default function PromoBanner({compProps}) {

if(!compProps) return;

const {bannerTitle, bannerDescription, bannerCTAs, bannerImage, layout} = compProps.fields;

    return (

        <section className="mt-5 ">
            <div className="container">
                <div className="detail-page text-center">
                <Image src={'https://' + bannerImage.fields.file.url} 
                        width={bannerImage.fields.file.details.image.width} 
                        height={bannerImage.fields.file.details.image.height} alt={bannerImage.fields.description} />  
                    <h2>{bannerTitle}</h2>
                    <p>
                        {documentToReactComponents(bannerDescription)}
                    </p>
                     
                </div>                
            </div>
        </section>
    );
}