import React from 'react';
import styles from './styles.module.css';

const ClientList = [
  {
    title: "Carrefour",
    link: "https://www.carrefour.com.ar/",
    Svg:  require('@site/static/img/clients/carrefour.svg').default,
  },
  {
    title: "Carrefour",
    link: "https://www.carrefour.com.ar/",
    Svg:  require('@site/static/img/clients/carrefour.svg').default,
  },
  {
    title: "Carrefour",
    link: "https://www.carrefour.com.ar/",
    Svg:  require('@site/static/img/clients/carrefour.svg').default,
  },
];

function Client({Svg, title, link}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Svg className={styles.clientSvg} role="img" alt={title} />
    </a>
  );
}

export default function HomepageClients() {
  return (
    <section className={styles.clients}>
      <div className="container text--center">
        <h2>Chosen by companies and open source projects</h2>
        <div className="row" style={{justifyContent: 'center', margin: 40}}>
          {ClientList.map((props, idx) => (
            <Client key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
