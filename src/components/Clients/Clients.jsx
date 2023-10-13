"use client"
import React, { useState } from 'react'
import styles from "./Clients.module.scss"
import Image from 'next/image'

const Clients = () => {
  const [currentLogo,setCurrentLogo] = useState(0);

  const handleNext = ()=>{
    (currentLogo <= (clientsData.length - 1)) ? setCurrentLogo((prev)=> prev + 1) : setCurrentLogo(0);
    // console.log("next",currentLogo);
  }
  const handlePrev = ()=>{
    (currentLogo > 0) ? setCurrentLogo((prev)=> prev - 1) : setCurrentLogo(0);
    // console.log("prev",currentLogo);
  }
  const clientsData = [
    {
      "id" : 0,
      "imgSrc" : "/layers-logo.png",
    },
    {
      "id" : 1,
      "imgSrc" : "/quotient-logo.png",
    },
    {
      "id" : 2,
      "imgSrc" : "/sisyphus-logo.png",
    },
    {
      "id" : 3,
      "imgSrc" : "/hourglass-logo.png",
    },
    {
      "id" : 4,
      "imgSrc" : "/circooles-logo.png",
    },
  ]
  return (
    <div className={styles.clientsContainer}>
        <Image src="/arrow_back_ios.png" alt="previous icon" height={24} width={24} className={styles.prevBtn} onClick={()=>handlePrev()}></Image>
        <div className={styles.clientsLogo}>
          {clientsData?.map((item)=>(
              <Image src={item?.imgSrc} alt="client logo" 
              height={50} width={125} 
              key={item.id}
              style={{transform: `translateX(-${currentLogo*100}%)`}}
              ></Image>
          ))}
        </div>
        <Image src="/arrow_forward_ios.png" alt="next icon" height={24} width={24} className={styles.nextBtn} onClick={()=>handleNext()}></Image>
    </div>
  )
}

export default Clients


{/* <Image src="/layers-logo.png" alt="client logo" height={40} width={114}></Image> */}
{/* <Image src="/quotient-logo.png" alt="client logo" height={40} width={155}></Image> */}
{/* <Image src="/sisyphus-logo.png" alt="client logo" height={40} width={137}></Image> */}
{/* <Image src="/hourglass-logo.png" alt="client logo" height={40} width={162}></Image> */}
{/* <Image src="/circooles-logo.png" alt="client logo" height={40} width={151}></Image> */}