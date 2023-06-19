import React from 'react';
import styles from '../Styles/Main.module.css';
import DoneList from './DoneList';

const Done = ({ done }) => {
  return (
    <div className={styles.DoneContainer}>
      <div className={styles.Done_top}>
        <div className={styles.Done_top_top_left}>
          <span className={styles.circle}>.</span>
          <p>
            Done <span>4</span>
          </p>
        </div>
      </div>
      <div className={styles.Done_bottom}>
        <DoneList done={done} />
      </div>
    </div>
  );
};

export default Done;
