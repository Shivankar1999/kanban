import React from 'react';
import styles from '../Styles/Main.module.css';
import img2 from '../IMG/img7.jpg';
import img3 from '../IMG/img5.png';

const DoneList = ({ done }) => {
  return (
    <div className={styles.Donewrap}>
      {done.map((ele) => (
        <>
          <div className={styles.Donebox}>
            <div className={styles.Done_box_top}>
              <button>{ele.tag}</button>
              <p>...</p>
            </div>
            <div className={styles.Done_midbox}>
              <h3>Mobile App Design</h3>
              <img src={ele.src} alt="name" />
            </div>
            <div className={styles.Donebottom_box}>
              <div className={styles.DonebottomL}>
                <img src={img2} alt="b" />
                <img src={img3} alt="v" />
              </div>
              <div className={styles.DonebottomR}>
                <p>{ele.comment}Comments</p>
                <p>{ele.files}Files</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default DoneList;
