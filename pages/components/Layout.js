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
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/icon-192x192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.webmanifest" />
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
