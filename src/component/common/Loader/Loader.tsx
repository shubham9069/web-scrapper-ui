import React, { useContext } from "react";
import styles from "./Loader.module.scss";
import AppContext from "@/context/AppContext";
import Image from "next/image";

const Loader = () => {
  return (
    <div className={styles["loader-wrapper"]}>
      <Image src="/loader.gif" width={50} height={50} alt="no-loader" />
    </div>
  );
};

export default Loader;
