import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';

export default function Header({ home }) {
  return (
    <header className={styles.header}>
      {(
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=""
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      )}
    </header>
  )
}