import React from "react";
import styles from "./ModalSignUp.module.css";
import { useState } from "react";
import axios from "axios";

export default function ModalSignUp({ tokenStorage }) {
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function signUp() {
    axios
      .post("http://localhost:8080/auth/signup", {
        nickname,
        password,
        name,
        email,
      })
      .then((data) => console.log("가입 완료!"))
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.modal_signup_container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp();
        }}
        className={styles.modal_form}
      >
        <div className={styles.modal_nickname}>
          <label htmlFor="nickname">ID:</label>
          <input
            onChange={(e) => {
              setNickName(e.target.value);
            }}
            value={nickname}
            required
            type="text"
            id="nickname"
            name="nickname"
          />
        </div>
        <div className={styles.modal_password}>
          <label htmlFor="password">password:</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className={styles.modal_name}>
          <label htmlFor="name">name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className={styles.modal_email}>
          <label htmlFor="email">email:</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
            type="email"
            id="email"
            name="email"
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}
