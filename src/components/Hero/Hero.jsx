import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import styles from "./Hero.module.scss"
import ResModal from '../Header/ResourcesModal/ResModal'

const Hero = () => {
  return (
    <div className={styles.gradientOverlay}>
        <Header/>
        {/* <ResModal/> */}
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