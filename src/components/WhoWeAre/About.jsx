import React from "react";
import styles from "./About.module.scss";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1>Who We Are</h1>
        <p>
          We are a collaboration of Non Govt. and professionals working to
          ensure that government spending is done fairly, openly, efficiently,
          and creates the best value for money and best outcomes for Europe. We
          are working at the national and EU levels to advance the principles of
          openness in spending of funds, procurement, and company ownership
          within the EU.
        </p>
        <Link href="https://viveknepal.com.np">
          <div className={styles.redirection}>
            <div>See more</div>
            <Image
              src="/right-arrow.png"
              alt="arrow icon"
              height={12}
              width={12}
            ></Image>
          </div>
        </Link>
      </div>
      <div className={styles.aboutImages}>
        <div className={styles.aboutImgLeft}>
          <div>
            <div className={styles.abtImgContainer}>
              <Image
                src="/about-img1.png"
                alt="about image"
                // width={328}
                // height={415}
                fill={true}
                className={styles.scaleImg}
              ></Image>
            </div>
            <h1>Adriana Homolova</h1>
          </div>
          <div>
            <div className={styles.abtImgContainer}>
              <Image
                src="/about-img2-new.png"
                alt="about image"
                // width={328}
                // height={415}
                fill={true}
                className={styles.scaleImg}
              ></Image>
            </div>
            <h1>Karolis Granickas</h1>
          </div>
        </div>
        <div className={styles.aboutImgRight}>
          <div>
            <div className={styles.abtImgContainer}>
              <Image
                src="/about-img3.png"
                alt="about image"
                // width={328}
                // height={415}
                fill={true}
                className={styles.scaleImg}
              ></Image>
            </div>
            <h1>Sandor Lederer</h1>
          </div>
          <div>
            <div className={styles.abtImgContainer}>
              <Image
                src="/about-img4.png"
                alt="about image"
                // width={328}
                // height={415}
                fill={true}
                className={styles.scaleImg}
              ></Image>
            </div>
            <h1>Zara Montgomery</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
