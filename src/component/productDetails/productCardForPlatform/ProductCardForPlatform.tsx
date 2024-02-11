import Image from "next/image";
import styles from "./ProductCardForPlatform.module.scss";
import Link from "next/link";

const ProductCardForPlatform = ({ activeTab }: any): any => {
  return (
    <div className={styles["product-info"]}>
      <img
        className={styles["product-image"]}
        src={activeTab?.image}
        width={100}
        height={100}
        alt="product-image"
      />
      <p className={styles["product-price"]}>
        From:{" "}
        <span>
          {activeTab?.price} {activeTab?.priceCurrency}
        </span>
      </p>
      <p className={styles["product-desc"]}>{activeTab?.description}</p>
      <div className={styles["product-rating"]}>
        {activeTab?.ratingValue}{" "}
        <div>
          {[...Array(5)]?.map((e, i) => {
            return i + 1 <= Math.floor(Number(activeTab?.ratingValue)) ? (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 100 100"
              >
                <polygon
                  points="50,5 63,30 90,35 70,55 75,85 50,70 25,85 30,55 10,35 37,30"
                  fill="#f4c96b"
                />
              </svg>
            ) : (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 100 100"
              >
                <polygon
                  points="50,5 63,30 90,35 70,55 75,85 50,70 25,85 30,55 10,35 37,30"
                  fill="#bababa"
                />
              </svg>
            );
          })}
        </div>
        <span>({activeTab?.reviewCount})</span>
      </div>
      <Link
        href={activeTab?.url}
        className={styles["view-details"]}
        target="_blank"
      >
        view Details
      </Link>
    </div>
  );
};

export default ProductCardForPlatform;
