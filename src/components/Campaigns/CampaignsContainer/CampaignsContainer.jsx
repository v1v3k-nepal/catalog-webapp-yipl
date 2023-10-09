import React from 'react'
import styles from "./CampaignsContainer.module.scss"
import CampaignsCard from '../CampaignsCard/CampaignsCard'

const campaignData = [
    {
        "id": 1,
        "redirectUrl": "https://viveknepal.com.np",
        "imageSrc": "/campaign-img1.png",
        "title": "Open Data Directive",
        "desc": "In view of Russia's military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia's military action against the Ukrainian people,"
    },
    {
        "id": 2,
        "redirectUrl": "https://viveknepal.com.np",
        "imageSrc": "/campaign-img2.png",
        "title": "Data Security Standard",
        "desc": "Lorem vero iusto minus ab magni repellat blanditiis cum in deserunt eos natus libero mollitia voluptates."
    },
    {
        "id": 3,
        "redirectUrl": "https://viveknepal.com.np",
        "imageSrc": "/campaign-img3.png",
        "title": "Data Privacy Levels",
        "desc": "Lorem ipi enim qui. Cumque dolore illum consequuntur!"
    },
];

const CampaignsContainer = () => {
  return (
    <div className={styles.campaignContainer}>
        <div className={styles.campaignContent}>
            <h1>Campaigns</h1>
            <p>We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.</p>
        </div>
        <div className={styles.campaignsCards}>
        {campaignData.map((item) =>(
            <CampaignsCard data={item} key={item.id}/>
        ))}
        </div>
    </div>
  )
}

export default CampaignsContainer