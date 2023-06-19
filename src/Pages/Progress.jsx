import React from 'react';
import styles from '../Styles/Main.module.css';
import ProgressList from './ProgressList';

const Progress = ({ progress }) => {
  return (
    <div className={styles.ProgressContainer}>
      <div className={styles.Progress_top}>
        <div className={styles.Progress_top_top_left}>
          <span className={styles.circle}>.</span>
          <p>
            Progress <span>4</span>
          </p>
        </div>
      </div>
      <div className={styles.Pregress_bottom}>
        <ProgressList progress={progress} />
      </div>
    </div>
  );
};

export default Progress;
