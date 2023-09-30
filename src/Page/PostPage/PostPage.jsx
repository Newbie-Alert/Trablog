import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./PostPage.module.css";

export default function PostPage() {
  const urlParam = useParams();
  const [myPost, setMyPost] = useState();

  function getPosts() {
    axios
      .get(`http://localhost:8080/posts/${urlParam.id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTE1MWMwNjMzNGRmZTVkNTBhYjY1NGMiLCJpYXQiOjE2OTYwNDg4MDIsImV4cCI6MTY5NjIyMTYwMn0.mbNWct7IZdsvaINjj9239sC0rfKWPgv-TzbmBWi3jl4",
        },
      })
      .then((data) => setMyPost(data.data));
  }
  useEffect(() => {
    getPosts();
  }, []);

  const navi = useNavigate();

  return (
    // {토큰 인증이 안 됐다면, 로그인 하라고 뜨게}
    <div className={styles.post_container}>
      {myPost?.map((el) => {
        return (
          <div
            onClick={() => navi(`/myPosts/${urlParam.id}/${el._id}`)}
            key={el._id}
            className={styles.post_list}
          >
            <div className={styles.post_thumbnail}>
              <img src={el.image} alt="" />
            </div>
            <div className={styles.post_content}>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
