import {createClient} from 'contentful'

export default function contentfulClient(isPreview) {

    if(!isPreview){
        return createClient({
            space: "vsfvp3vjns8g",
            accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik",
          });
    }
    
    
    return createClient({
        space: "vsfvp3vjns8g",
        environment: "master", // defaults to 'master' if not set
        accessToken: "RgsQUYjSQI1_FA6Sf2IMlC1yPaWqlhOhUvWhAaq8g1c",
        host: "preview.contentful.com",
      });
}