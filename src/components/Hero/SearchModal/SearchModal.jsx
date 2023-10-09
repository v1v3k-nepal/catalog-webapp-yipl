import React from 'react'
import Image from "next/image"
import styles from "./SearchModal.module.scss"

const SearchModal = ({showSearch, toggleShowSearch}) => {
  return (
    <div className={`${styles.searchModalContainer} ${showSearch? styles.showSearchModal : ""}`}>
        <Image src="/close-icon.png" alt="close icon" width={20} height={20} className={styles.closeIcon} onClick={()=>toggleShowSearch()}></Image>
        <div className={styles.searchContainer}>
            <Image src="/search-lg.png" alt="search icon" width={24} height={24}></Image>
            <input type="text" placeholder="Search"/>
        </div>
    </div>
  )
}

export default SearchModal