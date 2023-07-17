import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    img: require('@site/static/img/undraw_website.png').default,
    description: (
      <>
        Playc0de was designed from the ground up to be easily installed and
        used to get up and running quickly.
      </>
    ),
    position: 'left'
  },
  {
    title: 'All the tools you need for testing at your fingertips',
    img: require('@site/static/img/undraw_playing_cards.png').default,
    description: (
      <>
        Write E2E tests, check the performance of your site, and see everthing in an easy to read report, only using one tool.
      </>
    ),
    position: 'right'
  },
  {
    title: 'Powered by Playright',
    img: require('@site/static/img/playwright_logo.png').default,
    description: (
      <>
        This project is based on Microsoft Playwright for end-to-end testing. Playc0de plans to be a robust and versatile framework while providing efficient test tools and patterns.
      </>
    ),
    position: 'left'
  },
];

function Feature({img, title, description, position}) {
  return (
    <div className={styles.feature} style={{direction: position === 'left' ? 'ltr' : 'rtl'}}>
      <div className="col col--6">
        <img className={styles.featureImg} src={img} />
      </div>
      <div style={{direction: 'ltr'}} className="col col--6">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
      </div>
    </section>
  );
}
