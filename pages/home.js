import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pixel Saga - NFT</title>
        <meta name="description" content="Non-Fungible Token Pixel Saga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Home
      </main>
    </div>
  )
}
