import styles from './layout.module.css';
import Link from 'next/link';

export default function Layout({ children, home }) {
  console.log('home', home);
  return (
    <div className={styles.container}>
      <div>
        <h1>Andreas Awesome Graphviewer!</h1>
    </div>
      <main>
        {children}
      </main>
      {home ?
      null :
      <Link href="/">
        <a>&larr; Hem!</a>
      </Link>}
    </div>
  )
}