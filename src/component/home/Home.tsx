"use client";
import styles from "./Home.module.scss";
import ProductCard from "../common/productCard/ProductCard";
import Header from "./header/Header";
import FeatureCard from "./featureCard/FeatureCard";
import MostSearch from "./mostSearch/MostSearch";
import { useEffect, useMemo, useState } from "react";

export default function Home({ product }: any) {
  const [searchResult, setSearchResult] = useState(null);
  const [searchText, setSearchText] = useState("");

  function searchResult_toggle(item: any) {
    setSearchResult(item);
    setSearchText("");
  }
  function handleInput(e: any) {
    setSearchText(e.target.value);
  }
  const featureData = [
    {
      title: "price Comparison",
      description:
        "Shortlist creators that reach, engage & influence your target audience within minutes",
      link: [
        {
          btnText: "Discovery Product",
        },
      ],
      image: "/productDiscover.svg",
      bgColor: "#ffdce294",
    },
    {
      title: "Want a check product Rating ",
      description:
        "Shortlist creators that reach, engage & influence your target audience within minutes",
      link: [
        {
          btnText: "Check Now",
        },
      ],
      image: "/marketing.svg",
      bgColor: "#f9e6c9b8",
    },
    {
      title: "View analytics Report ",
      description:
        "Shortlist creators that reach, engage & influence your target audience within minutes Shortlist creators that reach, engage & influence your target audience within minutes",
      link: [
        {
          btnText: "View Now",
        },
      ],
      image: "/analytics.svg",
      bgColor: "#dff1dfbf",
    },
  ];

  const AiData = {
    title: `Introduction Of `,
    subHeading: "Genrative Ai",
    description:
      "Shortlist creators that reach, engage & influence your target audience within minutes,Shortlist creators that reach, engage & influence your target audience within minutes,Shortlist creators that reach, engage & influence your target audience within minutes,Shortlist creators that reach, engage & influence your target audience within minutes,",
    link: [
      {
        btnText: "Genrate Ai",
      },
    ],
    image: "/productDiscover.svg",
    bgColor: "rgb(221, 232, 248)",
  };

  const searchArray = useMemo(() => {
    if (searchText) {
      var arr = product?.filter((item: any) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      });
      return arr;
    } else {
      return [];
    }
  }, [searchText]);

  return (
    <>
      <Header
        searchResult_toggle={searchResult_toggle}
        handleInput={handleInput}
        searchText={searchText}
        searchArray={searchArray}
      />
      {searchResult ? (
        <div className={`${styles["most-search-wrapper"]} padding-2rem`}>
          <h1>Searched item </h1>
          <MostSearch productList={[searchResult]} />
        </div>
      ) : null}

      <div className={`${styles["feature-wrapper"]} padding-2rem`}>
        <h1>Featured </h1>
        <div className={styles["feature-listing"]}>
          {featureData?.map((data, index) => {
            return <FeatureCard key={index} featureData={data} />;
          })}
          <MostSearch productList={product.slice(0, 5)} />
          <FeatureCard featureData={AiData} type={"AI"} />
        </div>
      </div>
      <div className={`${styles["product-wrapper"]} padding-2rem`}>
        <h1>Product listing</h1>
        <div className={styles["product-listing"]}>
          {product?.map((productData: any) => {
            return (
              <ProductCard key={productData?.name} productData={productData} />
            );
          })}
        </div>
      </div>
    </>
  );
}
