import { Fragment } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function PageDetail({compProps}) {
    if(!compProps) return;
    const {title, text} = compProps.fields;
    const texts = (text.content[0].content[0].value);
    return (
        
        <section className="mt-5 ">
            <div className="container">
                <div className="detail-page text-center">
                    <h1>{title}</h1>
                    <p> 
                       documentToReactComponents{texts}
                    </p>
                </div>        
            </div>
        </section>
    );
}