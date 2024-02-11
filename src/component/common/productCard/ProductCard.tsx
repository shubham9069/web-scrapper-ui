import Image from "next/image";
import Link from "next/link";
import styles from "./productCard.module.scss";

const ProductCard = ({ productData }: any) => {
  return (
    <div className={styles["product-wrapper"]}>
      <img
        className={styles["product-image"]}
        src={productData?.image}
        width={100}
        height={100}
        alt="no"
      />
      <div className={styles["product-content"]}>
        <div className={styles["product-name"]}>
          <img src={productData?.image} />
          <h4>{productData?.name}</h4>
        </div>
        <div className={`${styles["box-container"]}`}>
          <div>
            <span>Price</span>
            <p>
              {productData?.priceCurrency} {productData?.price}
              {productData?.mrp && (
                <span className={styles["product-mrp"]}>
                  {productData?.priceCurrency} {productData?.mrp}
                </span>
              )}
            </p>
          </div>
          <div>
            <span>Rating</span>
            <p>
              <Image
                src="/rating-yellow.svg"
                width={20}
                height={20}
                alt="no-image"
              />
              {productData?.AiRating}
            </p>
          </div>
        </div>
        <Link
          href={`/product/${productData?._id["$oid"]}`}
          className={styles["view-details"]}
        >
          view Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
