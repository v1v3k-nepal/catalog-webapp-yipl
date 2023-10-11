import React from 'react'
import styles from "./Contact.module.scss"

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.headingPart}>
        <h1>Contact Us</h1>
        <p>If you have any further inquires, please let us know by filling the form below</p>
      </div>
      <form action="">
        <div className={styles.fullName}>
          <div className={`${styles.input} ${styles.firstName}`}>
            <label htmlFor="firstName">First name</label>
            <input type="text" id='firstName'/>
          </div>
          <div className={`${styles.input} ${styles.lastName}`}>
            <label htmlFor="lastName">Last name</label>
            <input type="text" id='lastName'/>
          </div>
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input type="email" id='email'/>
        </div>
        <div className={styles.input}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="70" rows="5"></textarea>
        </div>
      </form>
      <button className='btn'>Submit</button>
    </div>
  )
}

export default Contact