import Logo from "../components/Logo";
import { useRouter } from "next/router";
import HeroCarousel from "../components/HeroCarousel";
import PageDetail from "../components/PageDetail";
import React, { Fragment } from "react";
import TeaserCardCarousel from "../components/TeaserCardCarousel";
import PromoBanner from "../components/PromoBanner";
import ThreeColumnLayout from "../components/ThreeColumnLayout";
import Layout from "./Layout";
import TextBlock from "./TextBlock";
import InvesterCanvas from "./invester-files-canvas";
import PressUpdate from "./press-updates";
import ImageResponsible from "./image-render";
import TopButton from "./TopButton";
import ImageGallary from "./image-gallery";
export default function RenderComponents({ components }) {
  const router = useRouter();
  const findersLogo = components.find(
    (comp) => comp.sys.contentType.sys.id == "header"
  );
  return (
    <Layout content={findersLogo}>
      {components.map((comp) => {
        var jsx;
    
        switch (comp.sys.contentType.sys.id) {
          case "header":
            jsx = <Logo key={comp.sys.id} compProps={comp} />;
            break;
          case "heroImages":
            jsx = (
              <HeroCarousel key={comp.sys.id} compProps={comp}></HeroCarousel>
            );
            break;
          case "titleAndDescription":
            jsx = <PageDetail key={comp.sys.id} compProps={comp}></PageDetail>;
            break;
          case "promoBanner":
            jsx = (
              <PromoBanner key={comp.sys.id} compProps={comp}></PromoBanner>
            );
            break;
          case "threeColumnLayout":
            jsx = (
              <ThreeColumnLayout
                key={comp.sys.id}
                compProps={comp}
              ></ThreeColumnLayout>
            );
            break;
          case "teaserCardCarousel":
            jsx =(<TeaserCardCarousel key={comp.sys.id} compProps={comp}/>)
            break;
          case "textBlock":
            jsx = <TextBlock key={comp.sys.id} compProps={comp}></TextBlock>;
            break;
            case "imageGallary":
              jsx =  <ImageGallary key={comp.sys.id} compProps={comp}/>;
              break;
          case "pressUpdates":
            jsx = (
              <PressUpdate key={comp.sys.id} compProps={comp}></PressUpdate>
            );
            break;
          case "imageResponse":
            jsx = <ImageResponsible key={comp.sys.id} compProps={comp} />;
            break;
        }

        return jsx;
      })}
      {router.query.slug == "investor-summary" && <InvesterCanvas />}
    </Layout>
  );
}
