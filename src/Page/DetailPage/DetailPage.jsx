import React, { useEffect, useState } from "react";
import styles from "./DetailPage.module.css";
import axios from "axios";
import { useParams } from "react-router";

export default function DetailPage() {
  const [post, setPost] = useState([]);

  const urlParams = useParams();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/posts/myPosts/${urlParams.id}/${urlParams.postId}`
      )
      .then((data) => setPost(data.data));
  }, []);
  return (
    <div className={styles.detail_container}>
      {post?.map((el, i) => {
        return (
          <div key={el._id} className={styles.post_detail}>
            <div className={styles.post_detail_content}>
              <h1>{el.title}</h1>
            </div>
            <div className={styles.post_detail_images}>
              <img src={el.image} alt="" />
              {el.images ? <img src={el.images[i]} alt="" /> : null}
              {el.images ? <img src={el.images[i + 1]} alt="" /> : null}
              {el.images ? <img src={el.images[i + 2]} alt="" /> : null}
            </div>
            <div className={styles.post_detail_description}>
              <p>{el.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
