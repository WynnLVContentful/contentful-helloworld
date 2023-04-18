import Logo from '../components/Logo';
import HeroCarousel from '../components/HeroCarousel';
import PageDetail from '../components/PageDetail';
import React, { Fragment } from 'react';
import TeaserCardCarousel from '../components/TeaserCardCarousel';
import PromoBanner from '../components/PromoBanner';
import ThreeColumnLayout from '../components/ThreeColumnLayout';
import Layout from './Layout';
export default function RenderComponents({components}){
console.log(components);
const findersLogo = components.find(
    (comp) => comp.sys.contentType.sys.id == "header"
  );
    return (
        <Layout content={findersLogo}>
                {
                    components.map(comp => {    
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
                        case "promoBanner":               
                            jsx = <PromoBanner key={comp.sys.id} compProps={comp}></PromoBanner>                
                            break;
                        case "threeColumnLayout":               
                            jsx = <ThreeColumnLayout key={comp.sys.id} compProps={comp}></ThreeColumnLayout>                
                            break;
                        case "teaserCardCarousel":               
                            jsx = <TeaserCardCarousel key={comp.sys.id} compProps={comp}></TeaserCardCarousel>                
                            break;
                        }
                        return jsx
                    }) 
                }
                </Layout>
    )
}