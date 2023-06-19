import React from 'react';
import styles from '../Styles/NavBar.module.css';
import {
  FiSearch,
  FiCircle,
  FiBell,
  FiMessageCircle,
  FiCalendar,
  FiChevronDown,
} from 'react-icons/fi';
const Navbar = () => {
  return (
    <div className={styles.Navbar_Container}>
      <div className={styles.Navbar_Container_Input}>
        <FiSearch />

        <input type="text" placeholder="Search for anything" />
      </div>
      <div className={styles.Navbar_Container_UserData}>
        <div className={styles.Navbar_message_notification}>
          <FiCalendar />
          <FiMessageCircle />
          <span>
            <span>
              <FiCircle />
            </span>
            <FiBell />
          </span>
        </div>
        <div className={styles.Navbar_userdata_image}>
          <span className={styles.Navbar_userdata}>
            <p>Anima Agrawal</p>
            <span>U.P, india</span>
          </span>
          <span className={styles.Navbar_img}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1482361046637-0226fdcfa3b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="userimage"
              />
            </div>
            <FiChevronDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
