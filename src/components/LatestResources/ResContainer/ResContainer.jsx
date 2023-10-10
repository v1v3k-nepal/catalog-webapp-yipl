import React from 'react'
import styles from "./ResContainer.module.scss"
import Link from 'next/link'
import { ResData } from './ResData'
import ResCard from '../ResCard/ResCard'

const ResContainer = () => {
  return (
    <div className={styles.resContainer}>
      <div className={styles.resContent}>
        <h1>Latest Resources</h1>
        <p>The latest resources includes Transparency Toolkit, Evidence, Best Practices</p>
      </div>
      <div className={styles.resCards}>
      {ResData.map((item)=>(
        <ResCard key={item.id} singleResData={item}/>
      ))}
      </div>
      <Link href="https://viveknepal.com.np">
          <button className='btn'>View all resources</button>
      </Link>
    </div>
  )
}

export default ResContainer