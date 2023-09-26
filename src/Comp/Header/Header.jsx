import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo}>Trablog _</div>
      <Sign />
      <Nav />
    </div>
  );
}

function Sign() {
  return (
    <div className={styles.sign_up_box}>
      <button>Sign Up</button>
      <div className={styles.sep}></div>
      <button>Sign In</button>
    </div>
  );
}

function Nav() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_lists}>
        <ul>
          <li>Home</li>
          <li>Recommendation</li>
          <li>Explore</li>
          <li>Help</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.nav_back}></div>
    </div>
  );
}
