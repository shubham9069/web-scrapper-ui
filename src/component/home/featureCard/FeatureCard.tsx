import Link from "next/link";
import styles from "./FeatureCard.module.scss";

const FeatureCard = ({ featureData, type }: any) => {
  return type != "AI" ? (
    <div className={styles["card-wrapper"]}>
      {featureData?.image && (
        <img className={styles["feature-image"]} src={featureData?.image}></img>
      )}
      <h1 className={styles["feature-title"]}>{featureData?.title}</h1>
      <p className={styles["feature-description"]}>
        {featureData?.description}
      </p>
      {featureData?.link.length &&
        featureData?.link?.map((link: any) => {
          return (
            <div key={link} className={`${styles["feature-button"]} `}>
              <Link href="/">{link?.btnText} </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12L19 12M12 5l7 7-7 7" />
              </svg>
            </div>
          );
        })}
    </div>
  ) : (
    <div
      className={styles["card-wrapper"]}
      style={{ background: `${featureData?.bgColor}` }}
    >
      {featureData?.image && (
        <img className={styles["feature-image"]} src={featureData?.image}></img>
      )}
      <h1 className={`${styles["feature-title"]} ${styles["ai"]}`}>
        {featureData?.title}
        <br /> <span>{featureData?.subHeading}</span>
      </h1>
      <p className={`${styles["feature-description"]} ${styles["ai"]}`}>
        {featureData?.description}
      </p>
      {featureData?.link.length &&
        featureData?.link?.map((link: any) => {
          return (
            <div
              key={link}
              className={`${styles["feature-button"]} ${styles["ai"]}`}
            >
              <Link href="/">{link?.btnText} </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12L19 12M12 5l7 7-7 7" />
              </svg>
            </div>
          );
        })}
    </div>
  );
};

export default FeatureCard;
