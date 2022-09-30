import styles from './Header.module.css';
import rocketImg from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketImg} alt="logo" />
      <div>
        <span className={styles.textLogoBlue}>to</span>
        <span className={styles.textLogoPurple}>do</span>
      </div>
    </header>
  );
}
