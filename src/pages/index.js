import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`开门大吉`}
      description={`${siteConfig.title}: ${siteConfig.tagline}`}
      noFooter noNav
      wrapperClassName={styles.heroMain}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.container)}>
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSubTitle)}>{siteConfig.tagline}</p>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
