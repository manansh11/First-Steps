import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Steps</title>
        <meta
          name="description"
          content="Interactive & Guided Web3 Tutorials"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>First Steps</h1>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Learn Web3 Hands on. <br /> No fluff.
        </h1>

        <p className={styles.description}>click below to get started</p>

        <Link href="/starthere">
          <button className={styles.main_button}>start learning now</button>
        </Link>

        <section className={styles.benefit_section}>
          <div className={styles.benefit_div}>
            <h1 className={styles.title}>Benefit #1</h1>
            <p className={styles.description}>benefit</p>
          </div>
          <div className={styles.benefit_div}>
            <h1 className={styles.title}>Benefit #2</h1>
            <p className={styles.description}>benefit</p>
          </div>
          <div className={styles.benefit_div}>
            <h1 className={styles.title}>Benefit #3</h1>
            <p className={styles.description}>benefit</p>
          </div>
        </section>

        <section className={styles.feature_section}>
          <div className={styles.feature_div}>
            <h1 className={styles.title}>
              Hands on practice with guided simulations
            </h1>
            <p className={styles.description}>details</p>

            <div className={styles.feature_video}>video</div>
          </div>

          <div className={styles.feature_div}>
            <h1 className={styles.title}>Learn how to use new dapps</h1>
            <p className={styles.description}>details</p>

            <div className={styles.feature_video}>video</div>
          </div>
        </section>

        <section className={styles.footer_cta}>
          <h1 className={styles.title}>Just 10 minutes for beginners.</h1>
          <Link href="/starthere">
            <button className={styles.main_button}>start learning now</button>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
