import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./PostPage.module.css";

export default function PostPage() {
  const urlParam = useParams();
  const [myPost, setMyPost] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${urlParam.id}`, {
        headers: {
          Authorization: "Bearer 토큰",
        },
      })
      .then((data) => setMyPost(data.data));
  }, []);

  return (
    // {토큰 인증이 안 됐다면, 로그인 하라고 뜨게}
    <div className={styles.post_container}>
      <h1>My Trablog</h1>
    </div>
  );
}
