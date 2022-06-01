import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Jednoduché pro nováčky",
    Svg: require("@site/static/img/undraw_start.svg").default,
    description: (
      <>
        Pokud zrovna začínáte, najdete zde krátký přehled co a jak dělat v
        různých situacích.
      </>
    ),
  },
  {
    title: "Tipy k výuce",
    Svg: require("@site/static/img/undraw_tips.svg").default,
    description: (
      <>
        Jak strukturovat výuku, co dělat nejdříve či co dělat v nestandardních
        situacích. Vše na jednom místě.
      </>
    ),
  },
  {
    title: "Řešení problémů",
    Svg: require("@site/static/img/undraw_problems.svg").default,
    description: (
      <>
        Zrovna řešíte problém? Koukněte na ty nejčastější a třeba tam je právě i
        ten Váš.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center margin-vert--lg">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
