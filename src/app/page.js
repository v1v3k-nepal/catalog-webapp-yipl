import styles from './page.module.css'
import CampaignsContainer from "@/components/Campaigns/CampaignsContainer/CampaignsContainer"
import About from "@/components/WhoWeAre/About"
import Clients from '@/components/Clients/Clients'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <CampaignsContainer/>
      <About/>
      <Clients/>
    </div>
  )
}
