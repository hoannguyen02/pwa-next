import Layout from "./components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <h1 className={styles.title}>Welcome to PWA</h1>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
