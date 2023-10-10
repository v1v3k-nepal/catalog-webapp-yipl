import React from "react";
import styles from "./ResCard.module.scss";
import Image from "next/image";
import LearnMore from "@/components/LearnMore/LearnMore";

const ResCard = ({ singleResData }) => {

  return (
    <div className={styles.singleResCard}>
      <div className={styles.iconPart}>
        <div className={styles.icon} style={{background: `${singleResData.color}`}}>
          <Image src={singleResData.iconSrc} alt="resource icon" height={27} width={27}></Image>
        </div>
        <h1>{singleResData.heading}</h1>
      </div>
      <div className={styles.cardContent}>
        <h1>{singleResData.title}</h1>
        <p>{singleResData.desc}</p>
      </div>
      <div className={styles.redirection}>
        <LearnMore url={singleResData.extUrl} />
      </div>
    </div>
  );
};

export default ResCard;
