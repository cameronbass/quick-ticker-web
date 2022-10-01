import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

import Header from './header'
import Footer from './footer'

const name = 'Quick Ticker';
const title = 'Footer';
export const siteTitle = 'Quick Ticker';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Ticker Boss Mode"
          content="Save and Track your favorite tickers"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header name={name} />

      <main>{children}</main>

      <Footer title={title} />
    </div>
  );
}