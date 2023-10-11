import React from 'react'
import styles from "./Copyright.module.scss"
import Image from 'next/image'

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <h1>Terms and Conditions</h1>
      <div className={styles.copyrightImg}>
        <Image src="/cc-logo.png" alt="copyright logo" 
        // height={25} 
        // width={105} 
        fill={true}></Image>
      </div>
    </div>
  )
}

export default Copyright