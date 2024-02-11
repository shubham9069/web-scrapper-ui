import React from "react";
import styles from "./Tab.module.scss";

const Tab = ({ tabData, setActiveTab, activeTab }: any) => {
  return (
    <div
      className={`${styles["tab"]} ${
        tabData?.platform == activeTab?.platform ? styles["active-tab"] : ""
      }`}
      onClick={() => setActiveTab(tabData)}
    >
      <span>{tabData?.platform}</span>
    </div>
  );
};

export default Tab;
