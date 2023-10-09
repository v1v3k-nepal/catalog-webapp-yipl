import styles from './page.module.css'
import CampaignsContainer from "@/components/Campaigns/CampaignsContainer/CampaignsContainer"

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <CampaignsContainer/>
    </div>
  )
}
