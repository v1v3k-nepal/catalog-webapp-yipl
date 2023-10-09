import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "./CampaignsCard.module.scss"

const CampaignsCard = ({data}) => {
  return (
    <div className={styles.campaignsCard}>
        <Image src={data.imageSrc} alt="campaign image" height={352} width={352}></Image>
        <div className={styles.cardContent}>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
        </div>
        <Link href={data.redirectUrl}>
                <div className={styles.redirection}>
                    <div>Learn More</div>
                    <Image src="/right-arrow.png" alt="arrow icon" height={12} width={12}></Image>
                </div>
        </Link>
    </div>
  )
}

export default CampaignsCard