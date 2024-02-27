import React, { useState } from 'react';
import styles from '../Styles/navbar.module.css';
import { RiMenu3Fill } from "react-icons/ri";
import { CiSearch } from 'react-icons/ci';
import Drawer from 'react-modern-drawer'

const Navbar = () => {

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.inputContainer}>
          <CiSearch className={styles.inputIcon} />
          <input type="text" className={styles.input} />
        </div>
        <ul className={styles.list}>
          <li className={styles.categories}>Categories</li>
          <li className={styles.builder}>Website Builders</li>
          <li className={styles.deals}>Today's Deals</li>
        </ul>
      </div>

    </>
  );
}

export default Navbar;