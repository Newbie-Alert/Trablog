import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ModalSignIn from "../SignComp/ModalSignIn";
import ModalSignUp from "../SignComp/ModalSignUp";
import { Link } from "react-router-dom";

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

  const logOut = () => {
    tokenStorage.clearToken();
    setIsLogined(false);
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
  }, [isLogined]);

  return (
    <div className={styles.header_container}>
      {signModalToggle === "signin" ? (
        <ModalSignIn
          tokenStorage={tokenStorage}
          closeModal={closeModal}
          setIsLogined={setIsLogined}
          setSignModalToggle={setSignModalToggle}
        />
      ) : null}
      {signModalToggle === "signup" ? (
        <ModalSignUp tokenStorage={tokenStorage} />
      ) : null}
      <div className={styles.logo}>Trablog _</div>
      {isLogined === false ? (
        <Sign HandleModal={HandleModal} />
      ) : (
        <User
          userProfile={userProfile}
          tokenStorage={tokenStorage}
          logOut={logOut}
        />
      )}
      <Nav tokenStorage={tokenStorage} />
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

function Nav({ tokenStorage }) {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_lists}>
        <ul>
          <li>Home</li>
          <li>Recommendation</li>
          <li>Explore</li>
          <Link to={`/myPosts/${tokenStorage.getName("name")}`}>
            <li>MyPost</li>
          </Link>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.nav_back}></div>
    </div>
  );
}

function User({ userProfile, logOut }) {
  return (
    <>
      <button
        onClick={logOut}
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
