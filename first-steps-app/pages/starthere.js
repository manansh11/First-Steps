import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const StartHere = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>First Steps</h1>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Let's start here. <br /> What is your comfort level with web3?.
        </h1>

        <div className={styles.start_here_buttons}>
          <Link href="/">
            <button className={styles.main_button}>I am a beginner</button>
          </Link>
          <Link href="/content/directory">
            <button className={styles.main_button}>I am not a beginner</button>
          </Link>
        </div>

        <div className={styles.not_sure}>
            <Link href="/">
                I am not sure
            </Link>
        </div>

      </main>
    </div>
  );
};

export default StartHere;
