import React from 'react'
import styles from "./NewsCard.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({singleNewsData}) => {
  return (
    <div className={styles.newsCard}>
        <Image src={singleNewsData.imgSrc} alt="news image" height={201} width={315}></Image>
        <div className={styles.newsTitle}>
            <h1>{singleNewsData.title}</h1>
        </div>
        <div className={styles.newsDesc}>
            <p>{singleNewsData.desc}</p>
        </div>
        <div className={styles.redirection}>
            <Link href={singleNewsData.newsUrl}>
                <div>Learn More</div>
            </Link>
            <Image src="/right-arrow.png" alt="arrow icon" height={12} width={12}></Image>
        </div>
        
    </div>
  ) 
}

export default NewsCard;