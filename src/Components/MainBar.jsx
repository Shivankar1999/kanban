import React, { useState } from 'react';
import img1 from '../IMG/img8.jpg';
import img2 from '../IMG/img2.png';
import img3 from '../IMG/img3.png';
import img4 from '../IMG/img4.jpg';
import img5 from '../IMG/img5.png';
import { FiStopCircle, FiServer } from 'react-icons/fi';

import {
  FaPenSquare,
  FaLink,
  FaFilter,
  FaAngleDown,
  FaPlusCircle,
  FaCalendar,
  FaSlideshare,
} from 'react-icons/fa';
import styles from '../Styles/Main.module.css';
import Todo from '../Pages/Todo';
import Progress from '../Pages/Progress';
import Done from '../Pages/Done';
const MainBar = () => {
  const todo = [
    {
      id: 1,
      name: 'BrainStroming',
      comment: 2,
      files: 1,
      tag: 'Low',
    },
    {
      id: 2,
      name: 'Reasearch',
      comment: 1,
      files: 3,
      tag: 'High',
    },
    {
      id: 3,
      name: 'Wireframes',
      comment: 4,
      files: 6,
      tag: 'High',
    },
  ];
  const progress = [
    {
      id: `${Date()}`,
      name: 'Onboarding Illutrations',
      src: 'https://static.vecteezy.com/system/resources/thumbnails/017/776/853/small/a-stunning-image-featuring-a-red-and-pink-rose-flower-with-a-blank-space-in-the-middle-perfect-for-adding-text-or-overlaying-graphics-this-is-ideal-for-use-on-social-media-websites-photo.jpg',
      tag: 'Low',
      comment: '4',
      files: '1',
    },
    {
      id: `${Date()}`,
      name: 'Mood Board',
      src: 'https://res.cloudinary.com/dqkjq620q/image/upload/v1/NonShopping/It_Fits_Image.jpg',
      tag: 'Low',
      comment: '1',
      files: '3',
    },
  ];

  const done = [
    {
      id: 8,
      name: 'Mobile Design',
      comment: 14,
      files: 16,
      tag: 'High',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvddmfhG9Zf5cpfxvW4svjcWbrmnbLtUC-TQ&usqp=CAU',
    },
  ];

  return (
    <div className={styles.Mainn_container}>
      <div className={styles.top_section}>
        <div className={styles.top__left_section}>
          <div className={styles.top_head_left}>
            <h2>Mobile App</h2>
            <span>
              <FaPenSquare />
            </span>
            <span>
              <FaLink />
            </span>
          </div>
          <div className={styles.top_head_bottom}>
            <button>
              <FaFilter />
              Filter
              <FaAngleDown />
            </button>

            <button>
              <FaCalendar /> Today <FaAngleDown />
            </button>
          </div>
        </div>
        <div className={styles.top__right_section}>
          <div className={styles.top_right_top}>
            <div className={styles.invitesection}>
              <FaPlusCircle />
              invite
            </div>
            <div className={styles.imgContainermain}>
              <img src={img1} alt="img1" />
              <img src={img2} alt="img2" />
              <img src={img3} alt="img3" />
              <img src={img4} alt="img4" />
              <img src={img5} alt="img5" />
              <div>+2</div>
            </div>
          </div>
          <div className={styles.top_right_bottom}>
            <div>
              <button>
                {' '}
                <FaSlideshare /> Share
              </button>
            </div>
            <div className={styles.stick}>
              <p>|</p>
            </div>
            <div className={styles.button_row}>
              <button
                style={{
                  background: 'purple',
                  color: '#fff',
                  marginRight: '7px',
                }}
              >
                <FiServer />
              </button>
              <button>
                <FiStopCircle />
              </button>
            </div>
            <img />
          </div>
        </div>
      </div>
      <div className={styles.bottom_section}>
        <Todo todo={todo} />
        <Progress progress={progress} />
        <Done done={done} />
      </div>
    </div>
  );
};

export default MainBar;
