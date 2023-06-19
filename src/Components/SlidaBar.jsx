import React, { useState } from 'react';
import styles from '../Styles/SlideBar.module.css';
import { AiFillBulb, AiOutlineAim } from 'react-icons/ai';
import {
  FiHome,
  FiPlusCircle,
  FiChevronsLeft,
  FiMessageCircle,
  FiTwitch,
  FiUsers,
  FiSettings,
  FiChevronsRight,
  FiCircle,
} from 'react-icons/fi';
const SlidaBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      icon: <FiHome />,
      name: 'Home',
    },
    {
      icon: <FiMessageCircle />,
      name: 'Messages',
    },
    {
      icon: <FiTwitch />,
      name: 'Tasks',
    },
    {
      icon: <FiUsers />,
      name: 'Members',
    },
    {
      icon: <FiSettings />,
      name: 'Settings',
    },
  ];
  return (
    <div
      style={{ width: isOpen ? '280px' : '50px' }}
      className={styles.sidebar}
    >
      <div className={styles.top_section}>
        <h3
          style={{ display: isOpen ? 'block' : 'none' }}
          className={styles.logo}
        >
          <AiOutlineAim />
          Project M.
        </h3>
        <div
          style={{ marginLeft: isOpen ? '50px' : '0px' }}
          className={styles.bars}
        >
          {isOpen ? (
            <FiChevronsLeft onClick={toggle} />
          ) : (
            <FiChevronsRight onClick={toggle} />
          )}
        </div>
      </div>
      {menuItem.map((ele, ind) => (
        <a href="#" key={ind} className={styles.link} activeclassName="active">
          <div className={styles.icon}>{ele.icon}</div>
          <div
            style={{ display: isOpen ? 'block' : 'none' }}
            className={styles.link_text}
          >
            {ele.name}
          </div>
        </a>
      ))}

      <div className={styles.middlesidebar}>
        <div className={styles.middlesidebar_Head}>
          <p style={{ display: isOpen ? 'block' : 'none' }}>MY PROJECTS</p>
          <FiPlusCircle />
        </div>
        <div className={styles.middlesidebar_botom}>
          <div className={styles.middlesidebar_botom_element}>
            <FiCircle title="Mobile App" style={{ color: 'green' }} />
            <p style={{ display: isOpen ? 'block' : 'none' }}>Mobile App</p>
            <p style={{ display: isOpen ? 'block' : 'none' }}>...</p>
          </div>
          <div className={styles.middlesidebar_botom_element}>
            <FiCircle title="Website Design" style={{ color: 'orange' }} />
            <p style={{ display: isOpen ? 'block' : 'none' }}>Website Design</p>
            <p style={{ display: isOpen ? 'block' : 'none' }}>...</p>
          </div>
          <div className={styles.middlesidebar_botom_element}>
            <FiCircle title="Design System" style={{ color: 'gray' }} />
            <p style={{ display: isOpen ? 'block' : 'none' }}>Design System</p>
            <p style={{ display: isOpen ? 'block' : 'none' }}>...</p>
          </div>
          <div className={styles.middlesidebar_botom_element}>
            <FiCircle title="Wireframes" style={{ color: 'blue' }} />
            <p style={{ display: isOpen ? 'block' : 'none' }}>Wireframes</p>
            <p style={{ display: isOpen ? 'block' : 'none' }}>...</p>
          </div>
        </div>
      </div>

      <div
        style={{ boxShadow: isOpen ? '' : 'none' }}
        className={styles.sidebarendbox}
      >
        <div className={styles.sidebarendbox_bulb}>
          <AiFillBulb style={{ display: isOpen ? '' : 'none' }} />
          <h3 style={{ display: isOpen ? '' : 'none' }}>Thought Time</h3>
          <p style={{ display: isOpen ? '' : 'none' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            quia quidem obcaecati fuga magnam corrupti.
          </p>
          {/* style={{ display: isOpen ? '' : 'none' }} */}
          {isOpen ? (
            <button>Write a Message</button>
          ) : (
            <AiFillBulb title="Message" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SlidaBar;
