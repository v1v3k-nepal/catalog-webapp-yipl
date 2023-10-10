import React from "react";
import styles from "./ResCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import LearnMore from "@/components/LearnMore/LearnMore";

const ResCard = ({singleResData}) => {
  return (
    <div className={styles.resCard}>
      <div className={styles.redirection}>
        <LearnMore url={singleResData.extUrl}/>
      </div>
    </div>
  );
};

export default ResCard;
