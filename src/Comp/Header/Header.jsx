import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ModalSignIn from "../SignComp/ModalSignIn";
import ModalSignUp from "../SignComp/ModalSignUp";

export default function Header({ tokenStorage }) {
  // 로그인, 회원가입 모달 제어
  const [signModalToggle, setSignModalToggle] = useState("");
  const [isLogined, setIsLogined] = useState(false);
  const [userProfile, setUserProfile] = useState("");

  const HandleModal = (e) => {
    if (e.target.id === "signup") {
      setSignModalToggle("signup");
    } else if (e.target.id === "signin") {
      setSignModalToggle("signin");
    }
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setSignModalToggle("");
  };

  // USE_EFFECT
  useEffect(() => {
    const isToken = tokenStorage.getToken("token");
    const UserName = tokenStorage.getName("name");
    if (isToken) {
      setIsLogined(true);
      setUserProfile(UserName);
    } else {
      setIsLogined(false);
    }
  }, []);

  return (
    <div className={styles.header_container}>
      {signModalToggle === "signin" ? (
        <ModalSignIn tokenStorage={tokenStorage} closeModal={closeModal} />
      ) : null}
      {signModalToggle === "signup" ? (
        <ModalSignUp tokenStorage={tokenStorage} />
      ) : null}
      <div className={styles.logo}>Trablog _</div>
      {isLogined === false ? (
        <Sign HandleModal={HandleModal} />
      ) : (
        <User userProfile={userProfile} tokenStorage={tokenStorage} />
      )}
      <Nav />
    </div>
  );
}

function Sign({ HandleModal }) {
  return (
    <div className={styles.sign_up_box}>
      <button id="signup" onClick={HandleModal}>
        Sign Up
      </button>
      <div className={styles.sep}></div>
      <button id="signin" onClick={HandleModal}>
        Sign In
      </button>
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

function User({ userProfile, tokenStorage }) {
  return (
    <>
      <button
        onClick={tokenStorage.clearToken}
        className={styles.user_logout_button}
        id="logout"
      >
        logout
      </button>
      <div className={styles.user_container}>
        <div className={styles.user_icon}>{userProfile.charAt(0)}</div>
      </div>
    </>
  );
}
