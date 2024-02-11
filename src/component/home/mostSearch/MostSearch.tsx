"use client";
import React, { useReducer } from "react";
import styles from "./MostSearch.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
const MostSearch = ({ productList }: any) => {
  const router = useRouter();
  const MostSearchItem = ({ item }: any) => {
    return (
      <div className={styles["item"]}>
        <div className={styles["item-image"]}>
          <img src={item?.image} alt="item-image" width={50} height={50}></img>
        </div>
        <div className={styles["item-name"]}>
          <p>{item?.name}</p>
        </div>
        <div className={styles["item-price"]}>
          <p>
            {item?.priceCurrency} {item?.price}
          </p>
        </div>
        <div className={styles["item-rating"]}>
          <p>{item?.AiRating}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 100 100"
          >
            <polygon
              points="50,5 63,30 90,35 70,55 75,85 50,70 25,85 30,55 10,35 37,30"
              fill="#f4c96b"
            />
          </svg>
        </div>
        <div className={styles["item-platform"]}>
          <Image
            src={
              "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
            }
            alt="item-image"
            width={24}
            height={24}
          ></Image>
        </div>
        <div
          className={styles["item-view"]}
          onClick={() => router.push(`/product/${item?._id["$oid"]}`)}
        >
          <p>view all</p>
        </div>
      </div>
    );
  };
  const MostSearchItemHeader = () => {
    return (
      <div className={styles["item"]}>
        <div className={styles["item-header-name"]}>
          <p>Image</p>
        </div>
        <div className={styles["item-header-name"]}>
          <p>Name</p>
        </div>
        <div className={styles["item-header-name"]}>
          <p>Price</p>
        </div>
        <div className={styles["item-header-name"]}>
          <p>Rating</p>
        </div>
        <div className={styles["item-header-name"]}>
          <p>Platform</p>
        </div>
        <div className={styles["item-header-name"]}>
          <p>View Product</p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles["mostsearch-wrapper"]}>
      <p className={styles["no-of-days"]}>Most searched (30 days)</p>

      <div className={styles["mostsearch-product-listing"]}>
        <MostSearchItemHeader />
        {productList?.map((item: any) => {
          return <MostSearchItem key={`product${item?.name}`} item={item} />;
        })}
      </div>
    </div>
  );
};

export default MostSearch;
