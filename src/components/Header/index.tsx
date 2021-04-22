import styles from "./styles.module.scss";
import { format } from "date-fns";

export default function Header() {
  const currentDate = format(new Date(), "EEE, MMMM do");
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />
      <p>The best place for you to listen, always</p>
      <span>{currentDate}</span>
    </header>
  );
}

// export default Header;
