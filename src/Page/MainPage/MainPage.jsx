import React, { useState } from "react";
import styles from "./MainPage.module.css";

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

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.editor_pick}>
          <div className={styles.editor_pick_carousel}>
            <div
              className={`${styles.editor_pick_slide} ${styles.one}`}
              style={{ transform: `translateX(${position}vw)` }}
            >
              <div className={styles.contents_container}>
                <h1 className={styles.content_title}>The Walchen Lake</h1>
                <p className={styles.content_description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  voluptate suscipit exercitationem. Non delectus magni
                  necessitatibus esse repudiandae assumenda natus optio odio
                  accusamus, fuga quae, enim quasi, saepe suscipit temporibus!
                </p>
                <button className={styles.content_button}>Read more</button>
              </div>
            </div>
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
