import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HARAHO - CHESS</title>
        <meta
          name="description"
          content="CHESS GAME Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2 className={styles.h2}>
          <span>HARAHO - CHESS</span>
        </h2>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>Welcome to Chess</p>
          <a href="https://nextjs.org">[using Next.js]</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/chess/chessGame" className={styles.card}>
            <h2>Start Chess &rarr;</h2>
            <p>Play Chess Game!</p>
            <p>This chess game made by HARAHO.</p>
          </Link>
          <a
            href="https://en.wikipedia.org/wiki/Rules_of_chess"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Learn Chess &rarr;</h2>
            <p>Learn about Chess rule.</p>
            <p>I want you enjoy this game.</p>
          </a>

          <a
            href="https://haraho.notion.site/Introduce-47fcff69eb9e4d989c149510bab22dd0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Notion &rarr;</h2>
            <p>Welcome to HARAHO - Notion page.</p>
            <p>Let me introduce myself.</p>
          </a>

          <a
            href="https://github.com/KwagDaeho"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>GitHub &rarr;</h2>
            <p>Welcome to HARAHO - GitHub Page.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright&copy; 2022. HARAHO </p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
