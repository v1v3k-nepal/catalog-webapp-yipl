"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import ResModal from "./ResourcesModal/ResModal";
import SearchModal from "../Hero/SearchModal/SearchModal";

const Header = () => {
  const [resModalVisibleState, setResModalVisibleState] = useState("hidden");
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = ()=>{
    resModalVisibleState == "hidden" ? setResModalVisibleState("visible") : setResModalVisibleState("hidden");
  }

  const toggleShowSearch = ()=>{
    showSearch ? setShowSearch(false) : setShowSearch(true);
  }

  return (
    <div className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <div className={styles.headerLeft}>
        <Image src="/company-logo.png" alt="company-logo" width={160} height={48} className={styles.companyLogo}></Image>
        <nav>
          <ul>
            <div className={`${styles.dynamicItems} ${resModalVisibleState=="visible" ? styles.visible : ""}`}>
              <li>Home</li>
              <li>About Us</li>
              <li>Case Studies</li>
            </div>
              <div className={styles.resContainer} onClick={()=>toggleMenu()}>
                <div className={styles.res}>
                  <li>Resources</li>
                  <Image src="/arrow-down.png" alt="arrow down" width={20} height={20}></Image>
                </div>
                <ResModal visibility={resModalVisibleState}/>
              </div>
          </ul>
        </nav>
      </div>

      <Image src="/search-icon.png" alt="search icon" width={36} height={36} className={styles.searchIcon} onClick={()=>toggleShowSearch()}></Image>
    </div>
    <SearchModal showSearch={showSearch} toggleShowSearch={toggleShowSearch}/>
    </div>
  );
};

export default Header;
