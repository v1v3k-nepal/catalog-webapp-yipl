import React from "react";
import styles from "./LearnMore.module.scss";
import Link from "next/link";
import Image from "next/image";

const LearnMore = ({url}) => {
  return (
    <div className={styles.learnMore}>
      <Link href={url}> <div>Learn More</div></Link>
      <Image src="/right-arrow.png" alt="arrow icon" height={12} width={12}></Image>
    </div>
  );
};

export default LearnMore;
