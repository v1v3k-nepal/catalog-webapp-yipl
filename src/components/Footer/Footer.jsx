import React from 'react'
import styles from "./Footer.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoSection}>
        <div className={styles.imgContainer}>
          <Image src="/company-logo.png" alt="company logo" fill={true} objectFit='cover'></Image>
        </div>
        <p>We are a collaboration of non-government organisation and professionals working to ensure that government spending.</p>
        <div className={styles.iconContainer}>
          <Link href="https://viveknepal.com.np">
            <div className={styles.socialIcon}>
              <Image src="/Twitter.png" alt="twitter icon" height={14.6} width={18}></Image>
            </div>
          </Link>
          <Link href="https://viveknepal.com.np">
            <div className={styles.socialIcon}>
              <Image src="/LinkedIn.png" alt="LinkedIn icon" height={17.14} width={18}></Image>
            </div>
          </Link>
          <Link href="https://viveknepal.com.np">
            <div className={styles.socialIcon}>
              <Image src="/YouTube.png" alt="YouTube icon" height={14} width={19.8}></Image>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.footerNav}>
        <div>
          <h1>Links</h1>
          <div>
            <Link href="https://viveknepal.com.np"><p>Campaigns</p></Link>
            <Link href="https://viveknepal.com.np"><p>Resources</p></Link>
            <Link href="https://viveknepal.com.np"><p>News</p></Link>
            <Link href="https://viveknepal.com.np"><p>About Us</p></Link>
          </div>
        </div>
        <div>
          <h1>Resources</h1>
          <div>
            <Link href="https://viveknepal.com.np"><p>Transparency Toolkit</p></Link>
            <Link href="https://viveknepal.com.np"><p>Evidence</p></Link>
            <Link href="https://viveknepal.com.np"><p>Best Practices</p></Link>
          </div>
        </div>
        <div>
          <h1>Work with Us</h1>
          <div>
            <Link href="https://viveknepal.com.np"><p>Contact Us</p></Link>
            <Link href="https://viveknepal.com.np"><p>Join Us</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer