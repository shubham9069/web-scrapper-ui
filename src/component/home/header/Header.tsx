"use client";
import { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
const Header = ({
  searchResult_toggle,
  handleInput,
  searchText,
  searchArray,
}: any) => {
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["header-top"]}>
        <p className={styles["name"]}>
          IN<span>SIGHT</span>
        </p>
        <Link href="/uploadfile">Upload</Link>
        <Link href="/">About us</Link>
      </div>

      <div className={styles["search-bar-container"]}>
        <p className={styles["heading"]}>
          Craft Content Throught <br />
          <span className="gradient-text">Ai Assistance </span>
        </p>
        <span className={styles["span-text"]}>
          Rapidly Develop a Tailored AI Assistant with OpenAI's GPT-3.5:
          Seamlessly Connect to Resources and Upload Files for Comprehensive
          Assistance.
        </span>
        <div className={styles["search-bar"]}>
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleInput}
          />

          {searchArray.length ? (
            <div className={styles["search-bar-content"]}>
              {searchArray?.map((item: any) => {
                return (
                  <p onClick={() => searchResult_toggle(item)}>{item?.name}</p>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
