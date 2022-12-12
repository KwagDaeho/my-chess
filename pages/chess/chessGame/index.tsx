import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import ChessBoard from "../chessBoard";
import ChessPieces from "../chessPieces";

export default function ChessGame() {
  return (
    <div className={styles.container}>
      <header>
        <h2 className={styles.h2}>
          <Link href="/">
            <span>HOME</span>
          </Link>
        </h2>
      </header>
      <main className={styles.main + " haraho-chess-wrap"}>
        <h1 className={styles.title}>
          <p>===== CHESS =====</p>
          <p>=================</p>
        </h1>
        <ChessBoard></ChessBoard>
        <ChessPieces piece={"asd"}></ChessPieces>
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
