import { Fragment } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function PageDetail({compProps}) {
    if(!compProps) return;
    const {title, text} = compProps.fields;

    return (
        
        <section className="mt-5 ">
            <div className="container">
                <div className="detail-page text-center">
                    <h1>{title}</h1>
                    <p> 
                        {documentToReactComponents(text)}
                    </p>
                </div>                
            </div>
        </section>
    );
}