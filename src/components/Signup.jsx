import React from 'react'
import styles from '../Styles/signup.module.css'
const Signup = () => {
  return (

    <div className={styles.signupcont}>
      <div className={styles.heading}>
        <p> Sign up and get exclusive &nbsp;</p>
        <p> special deals</p>
      </div>
      <div className={styles.input}>
        <input type="text" className={styles.inputText} />
        <button>Sign Up</button>
      </div>
    </div>

  )
}

export default Signup