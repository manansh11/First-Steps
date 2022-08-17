import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import chainshot from "../../public/uniswap.png";

const Directory = () => {
  let directory = [];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <h1>First Steps</h1>
        </Link>
      </header>

      <main className={styles.main}>
        <section className={styles.directory_section}>
          <div className={styles.directory_div}>
            <div className="directory_logo">
              <Image
                src={chainshot}
                alt="chainshot"
                width="150px"
                height="75px"
              />
            </div>
            {/* title / desc */}
            <h1>How Do I swap Tokens?</h1>
            <p>Learn about token swapping</p>
            {/* tags */}
            <div className={styles.directory_tag}>DEFI</div>
            <div className={styles.directory_tag}>DAO</div>
            <button className={styles.main_button}> Start Track </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Directory;
