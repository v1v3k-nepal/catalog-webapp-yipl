import React from 'react'
import styles from "./CampaignsContainer.module.scss"
import CampaignsCard from '../CampaignsCard/CampaignsCard'
import { campaignData } from './campaignData'

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