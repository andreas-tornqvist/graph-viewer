import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
    <div className={styles.container}>
      <Head>
        <title>Grafer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Välkommen!
        </h1>

        <p className={styles.description}>
          Vad vill du kolla på idag?
        </p>

        <div className={styles.grid}>
          <Link href="graphs/bak">
          <a className={styles.card}>
            <h3>Baksidan &rarr;</h3>
            <p>Se temperaturhistoriken på baksidan det senaste dygnet</p>
          </a>
          </Link>

          <Link href="graphs/grg">
          <a className={styles.card}>
            <h3>Garaget &rarr;</h3>
            <p>Se temperaturhistoriken i garaget det senaste dygnet</p>
          </a>
          </Link>

          <Link href="custom">
          <a className={styles.card}>
            <h3>Manuell &rarr;</h3>
            <p>Välj parametrar för att se temperaturhistoriken</p>
          </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    </Layout>
  )
}
