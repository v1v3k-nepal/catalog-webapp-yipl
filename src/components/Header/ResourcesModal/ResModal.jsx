import React from 'react'
import Image from 'next/image'
import styles from "./ResModal.module.scss"

const ResModal = ({visibility}) => {

  return ( 
    <div className={`${styles.resModal} ${visibility == "visible" ? styles.visibleClass : ''}`}>
        <div className={styles.modalItem}>
            <Image src="/book-icon.png" alt="book icon" width={24} height={24}></Image>
            <div>
                <h1>Blog</h1>
                <p>The latest industry news, updates and info.</p>
            </div>
        </div>
        <div className={styles.modalItem}>
            <Image src="/zap.png" alt="book icon" width={24} height={24}></Image>
            <div>
                <h1>Customer Stories</h1>
                <p>Learn how our customers are making big changes.</p>
            </div>
        </div>
        <div className={styles.modalItem}>
            <Image src="/play-circle.png" alt="book icon" width={24} height={24}></Image>
            <div>
                <h1>Video Tutorials</h1>
                <p>Get up and running on new features and techniques.</p>
            </div>
        </div>
    </div>
  )
}

export default ResModal