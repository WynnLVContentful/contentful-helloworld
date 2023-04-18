import { createClient } from "contentful";

import Logo from "../../components/Logo";
import HeroCarousel from "../../components/HeroCarousel";
import Navigation from "../../components/Navigation";
import PageDetail from "../../components/PageDetail";
import ThreeColumnBanner from "../../components/ThreeColumnBanner";
import TwoColumnBanner from "../../components/TwoColumnBanner";
import React, { Fragment } from "react";
import TeaserCardCarousel from "../../components/TeaserCardCarousel";
import PromoBanner from "../../components/PromoBanner";
import { Watercanvas } from "../../components/WaterCanvas";
import HorizontalOne from "../../components/sideBarCanvas";
import TwoColumnCanvas from "../../components/twoColumnCanvas";
import ThreeColumnLayout from "../../components/ThreeColumnLayout";

export async function getStaticProps() {
  const client = createClient({
    space: "vsfvp3vjns8g",
    accessToken: "QY1yhc6cZbV4FNiVoOrEPvKjbEyHjcgs5-5mZeQTqik",
  });

  const res = await client.getEntry("03QtHp3TbiNKZWUbviQtx", { include: 10 });

  return {
    props: {
      homePage: res,
      revalidate: 1,
    },
  };
}

export default function InversterSummary({ homePage }) {
  const { content } = homePage.fields;
  return (
    <Fragment>
      {content.map((comp) => {
        var jsx;
        //  (comp.sys.contentType.sys.id)
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
            jsx = (
              <TeaserCardCarousel
                key={comp.sys.id}
                compProps={comp}
              ></TeaserCardCarousel>
            );
            break;
        }
        return jsx;
      })}
    </Fragment>
  );
}
