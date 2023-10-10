import React from 'react'
import styles from "./NewsContainer.module.scss"
import { newsData } from './newsData'
import NewsCard from '../NewsCard/NewsCard'
import Link from 'next/link'

const NewsContainer = () => {

  return (
    <div className={styles.newsContainer}>
        <div className={styles.newsContent}>
            <h1>News</h1>
            <p>We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.</p>
        </div>
        <div className={styles.newsCards}>
            {newsData.map((item)=>(
                <NewsCard key={item.id} singleNewsData={item}/>
            ))}
        </div>
        <Link href="https://viveknepal.com.np">
            <button className='btn'>View all news</button>
        </Link>
    </div>
  )
}

export default NewsContainer