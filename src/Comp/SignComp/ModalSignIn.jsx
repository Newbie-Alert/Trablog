import React from "react";
import styles from "./ModalSignIn.module.css";
import axios from "axios";
import { useState } from "react";

export default function ModalSignIn({
  tokenStorage,
  setIsLogined,
  setSignModalToggle,
}) {
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");

  function signIn(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/signin", {
        nickname,
        password,
      })
      .then((data) => tokenStorage.saveToken(data.data.token, data.data.name))
      .then(() => {
        setIsLogined(true);
        setSignModalToggle("");
      })

      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.modal_signup_container}>
      <form onSubmit={signIn} className={styles.modal_form}>
        <div className={styles.modal_nickname}>
          <label htmlFor="nickname">ID</label>
          <input
            onChange={(e) => setNickName(e.target.value)}
            value={nickname}
            required
            type="text"
            id="nickname"
            name="nickname"
          />
        </div>
        <div className={styles.modal_password}>
          <label htmlFor="password">password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button>sign in</button>
      </form>
    </div>
  );
}
