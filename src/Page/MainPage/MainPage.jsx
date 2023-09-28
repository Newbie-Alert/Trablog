import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import axios from "axios";

export default function MainPage() {
  const [position, setPosition] = useState(0);
  const HandleCarousel = (e) => {
    if (e.target.id === "left" && position >= -1000) {
      setPosition(position - 100);
    }
    if (e.target.id === "right" && position < 0) {
      setPosition(position + 100);
    }
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then((data) => setPosts(data.data));
  }, []);

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.editor_pick}>
          <div className={styles.editor_pick_carousel}>
            {posts?.map((post) => {
              return (
                <div
                  key={post._id}
                  className={`${styles.editor_pick_slide} ${styles.one}`}
                  style={{
                    transform: `translateX(${position}vw)`,
                    backgroundImage: `url(${post.image})`,
                  }}
                >
                  <div className={styles.contents_container}>
                    <h1 className={styles.content_title}>{post.title}</h1>
                    <p className={styles.content_description}>
                      {post.description}
                    </p>
                    <button className={styles.content_button}>Read more</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.button}>
          <button onClick={HandleCarousel} id="left">
            {"<"}
          </button>
          <button onClick={HandleCarousel} id="right">
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}
