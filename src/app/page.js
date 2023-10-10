import styles from './page.module.css'
import CampaignsContainer from "@/components/Campaigns/CampaignsContainer/CampaignsContainer"
import About from "@/components/WhoWeAre/About"

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <CampaignsContainer/>
      <About/>
    </div>
  )
}
