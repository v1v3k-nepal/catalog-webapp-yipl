import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "./CampaignsCard.module.scss"
import LearnMore from '@/components/LearnMore/LearnMore';

const CampaignsCard = ({data}) => {
  return (
    <div className={styles.campaignsCard}>
      <div className={styles.imgContainer}>
        <Image src={data.imageSrc} alt="campaign image" fill={true}></Image>
      </div>
        <div className={styles.cardContent}>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
        </div>
        <div className={styles.redirection}>
          <LearnMore url={data.redirectUrl}/>
        </div>
    </div>
  )
}

export default CampaignsCard