/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>PWA</title>
        <meta name="description" content="PWA" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link
          rel="icon"
          type="image/png"
          href="/icon-192x192.png"
        />
        <link
          rel="mask-icon"
          href="/icon-192x192.png"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          marginTop: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href={"/"} passHref>
          <a style={{ marginRight: 16 }}>Home</a>
        </Link>
        <Link href="/what-is-pwa" passHref>
          <a style={{ marginRight: 16 }}>What is PWA?</a>
        </Link>
        <Link href="/what-are-the-technologies" passHref>
          <a>What are the technologies?</a>
        </Link>
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
