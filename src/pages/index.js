import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageClients from '@site/src/components/HomepageClients';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode, setColorMode } = useColorMode();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src={colorMode !== 'dark' ? "img/logo_light.png" : "img/logo_dark.png"} width={500} height={320}></img>
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            GET STARTED
          </Link>
        </div>
      </div>
    </header>
  );
}

function Platforms() {
  return (
    <div className="text--center">
      <img className={styles.platforms} src="https://playwright.dev/img/logos/Browsers.png" width={'40%'}></img>
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Testing, made easy | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Platforms />
        <HomepageFeatures />
        <HomepageClients />
      </main>
    </Layout>
  );
}
