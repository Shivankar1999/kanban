import React from 'react';

import MainBar from './Components/MainBar';
import Navbar from './Components/Navbar';
import SlidaBar from './Components/SlidaBar';
import styles from './Styles/container.module.css';

function App() {
  return (
    <div className={styles.Main_Container}>
      <Navbar />
      <MainBar />
      <SlidaBar />
    </div>
  );
}

export default App;
