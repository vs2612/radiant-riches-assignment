import React from 'react'
import styles from '../Styles/header.module.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const myButtons = ["Tools", "AWS Builder", "Start Build", "Build Supplies", "Tooling", "BlueHosting"]
  const navigation = ["Home", ">", "Hosting for all", ">", "Hosting", ">", "Hosting6", ">", "Hosting5"]
  return (

    <div>
      <h1 className={styles.heading}>Best Website builders in the US</h1>
      <div className={styles.divider}></div>
      <div className={styles.info}>
        <div className={styles.container}>
          <p>  <IoIosCheckmarkCircleOutline className={styles.tick} /> Last Updated <span> - Februrary 22 , 2020 </span>
            <p>  <IoIosInformationCircleOutline className={styles.infoIcon} /> Advertising Disclosure </p> </p>
        </div>
        <p>Top Relevant <MdKeyboardArrowDown /></p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.mybtns}>
        {myButtons.map((button) => <button>{button}</button>)}
      </div>
      <div className={styles.nav}>
        {navigation.map((nav) => <span >{nav} </span>)}
      </div>
    </div>
  )
}

export default Header