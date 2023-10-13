"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import styles from "./Hero.module.scss"
import Menu from '../Header/Menu/Menu'

const Hero = () => {
  const [dataFromHeader, setDataFromHeader] = useState(false);
  const handleDataPassed = (data)=>{
    setDataFromHeader(data);
  }
  return (
    <div className={styles.gradientOverlay}>
        <Header onDataPassed={handleDataPassed}/>
        <Menu visibleState={dataFromHeader}/>
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Beautiful analytics to grow smarter</h1>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage,<br /> 
                  and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className={styles.catalogButton}>
              <p>Why Catalog?</p>
              <Image src="/arrow_forward.png" alt="arrow forward icon" width={16} height={16}/>
            </div>
        </div>
    </div>
  )
}

export default Hero