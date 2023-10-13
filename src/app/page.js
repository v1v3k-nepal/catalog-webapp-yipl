import styles from './page.module.css'
import CampaignsContainer from "@/components/Campaigns/CampaignsContainer/CampaignsContainer"
import About from "@/components/WhoWeAre/About"
import Clients from '@/components/Clients/Clients'
import NewsContainer from '@/components/News/NewsContainer/NewsContainer'
import ResContainer from '@/components/LatestResources/ResContainer/ResContainer'
import Contact from '@/components/ContactUs/Contact'
import Footer from '@/components/Footer/Footer'
import Copyright from '@/components/Footer/Copyright'
import Hero from '@/components/Hero/Hero'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Hero/>
      <CampaignsContainer/>
      <About/>
      <Clients/>
      <NewsContainer/>
      <ResContainer/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </div>
  )
}
