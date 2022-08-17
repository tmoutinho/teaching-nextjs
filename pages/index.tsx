import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Button from "../components/button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div style={{ display: "flex", gap: "20px" }}>
          <Button buttonTexto="Button 1" variant="primary" />
          <Button buttonTexto="Button 2" variant="secondary" />
        </div>

        <div className={styles.cartoes}>
          <div className={styles.cartao}>1</div>
          <div className={styles.cartao}>2</div>
          <div className={styles.cartao}>3</div>
          <div className={styles.cartao}>4</div>
        </div>

        <Link href={"/nova"}>Ir para nova pagina</Link>
      </main>
    </div>
  );
};

export default Home;
