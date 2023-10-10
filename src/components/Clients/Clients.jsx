import React from 'react'
import styles from "./Clients.module.scss"
import Image from 'next/image'

const Clients = () => {
  return (
    <div className={styles.clientsContainer}>
        <Image src="/arrow_back_ios.png" alt="previous icon" height={24} width={24} className={styles.prevBtn}></Image>
        <div className={styles.clientsLogo}>
            <Image src="/layers-logo.png" alt="client logo" height={40} width={114}></Image>
            <Image src="/quotient-logo.png" alt="client logo" height={40} width={155}></Image>
            <Image src="/sisyphus-logo.png" alt="client logo" height={40} width={137}></Image>
            <Image src="/hourglass-logo.png" alt="client logo" height={40} width={162}></Image>
            <Image src="/circooles-logo.png" alt="client logo" height={40} width={151}></Image>
        </div>
        <Image src="/arrow_forward_ios.png" alt="next icon" height={24} width={24} className={styles.nextBtn}></Image>
    </div>
  )
}

export default Clients