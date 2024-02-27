import React from 'react'
import styles from '../Styles/footer.module.css'
import { MdKeyboardArrowDown } from "react-icons/md";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.categories}>
        <h5>CATEGORIES</h5>
        <div className={styles.subcategories}>
          <div>Web Builder</div>
          <div>Hosting</div>
          <div>Data Center</div>
          <div>Robotic-Automation</div>
        </div>
      </div>
      <div className={styles.contact}>
        <h5>CONTACT</h5>
        <div className={styles.subcontacts}>
          <div>Contact</div>
          <div>Privacy Policy</div>
          <div>Terms of Services</div>
          <div>Categories</div>
          <div>About</div>
        </div>
      </div>
      <div className={styles.country}>
        <div className={styles.us}>United States <MdKeyboardArrowDown /></div>
      </div>
    </div>
  )
}

export default Footer