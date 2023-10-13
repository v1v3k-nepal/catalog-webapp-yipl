"use client";
import React from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";
import Image from "next/image";
import ResModal from "../ResourcesModal/ResModal";
import { useState } from "react";
import SearchModal from "@/components/Hero/SearchModal/SearchModal";

const Menu = ({visibleState}) => {
  const [resModalVisibleState, setResModalVisibleState] = useState("hidden");
  const [showSearch, setShowSearch] = useState(false);
  
  const toggleResModal = ()=>{
    resModalVisibleState == "hidden" ? setResModalVisibleState("visible") : setResModalVisibleState("hidden");
  }

  const toggleShowSearch = ()=>{
    showSearch ? setShowSearch(false) : setShowSearch(true);
  }

  return (
    <div className={`${styles.menu} ${visibleState ? styles.visibleClass : styles.hideClass}`}>
      <div className={styles.content}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/caseStudies">Case Studies</Link>
        <div className={styles.searchModal}>
          <p onClick={()=>toggleShowSearch()}>Search</p>
          <div style={{position: "static"}}>
            <SearchModal showSearch={showSearch} toggleShowSearch={toggleShowSearch}/>
          </div>
        </div>
        <div className={styles.resContainer} onClick={() => toggleMenu()}>
          <div className={styles.res}>
            <div onClick={()=>toggleResModal()}>Resources</div>
            <Image
              src="/arrow-down.png"
              alt="arrow down"
              width={60}
              height={60}
            ></Image>
          </div>
          <ResModal visibility={resModalVisibleState} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
