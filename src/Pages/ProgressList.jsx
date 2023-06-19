import React from 'react';
import styles from '../Styles/Main.module.css';
import img2 from '../IMG/img7.jpg';
import img3 from '../IMG/img5.png';

const ProgressList = ({ progress }) => {
  return (
    <div className={styles.progresswrap}>
      {progress.map((ele) => (
        <>
          <div className={styles.progress_box}>
            <div className={styles.top}>
              <button>{ele.tag}</button>
              <p>...</p>
            </div>
            <div className={styles.middle}>
              <h2>{ele.name}</h2>
              <img src={ele.src} alt="name" />
            </div>
            <div className={styles.bottom}>
              <div className={styles.imgC}>
                <img src={img2} alt="name" />
                <img src={img3} alt="name" />
              </div>
              <p>{ele.comment}Comment</p>
              <p> {ele.files}Files</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProgressList;
