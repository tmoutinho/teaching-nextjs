import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Carlsberg: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Olá Carlsberg</h1>
      </main>
    </div>
  );
};

export default Carlsberg;
