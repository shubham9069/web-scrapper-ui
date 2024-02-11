"use client";
import Image from "next/image";
import styles from "./ProductDetails.module.scss";
import LineChart from "./apacheCharts/LineChart";
import BarChart from "./apacheCharts/BarChart";
import Tab from "./tabsInfo/Tab";
import { useEffect, useState } from "react";
import ProductCardForPlatform from "./productCardForPlatform/ProductCardForPlatform";
import LargeAreaChart from "./apacheCharts/LargeAreaChart";
import { getPriceAnalysis } from "@/app/product/[product]/productDetailsService";

const ProductDetails = ({ productData }: any) => {
  const [activeTab, setActiveTab] = useState(productData?.product_data[0]);
  const [chartTimePeriod, setChartTimePeriod] = useState("7");
  const [chartData, setChartData] = useState("");

  async function price_analysis() {
    let todayDate = new Date();

    let payload = {
      scrap_product_id: "659fad5ea80a49437209c26e",
      start_date: "2024-01-10",
      end_date: todayDate.toISOString().split("T")[0],
    };
    const res: any = await getPriceAnalysis(payload);

    if (res.status == 200) {
      setChartData(res.data);
    }
  }

  useEffect(() => {
    price_analysis();
  }, [activeTab]);
  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["product-details"]}>
          <div className={styles["product-details-conatiner"]}>
            <div className={styles["container-left"]}>
              <img src={productData?.image}></img>
            </div>
            <div className={styles["container-right"]}>
              <p className={styles["heading"]}>{productData?.name}</p>
              <p className={styles["price"]}>
                {productData?.priceCurrency} {productData?.price}
                {productData?.mrp && (
                  <span>
                    {productData?.priceCurrency} {productData?.mrp}
                  </span>
                )}
              </p>
              <p className={styles["desc"]}>{productData?.desc}</p>
            </div>
          </div>
          <div
            className={styles["price-table"]}
            style={{
              gridTemplateColumns: `repeat(${productData?.product_data.length}, minmax(200px, 300px))`,
            }}
          >
            {productData?.product_data?.map((platForm: any, i: number) => {
              return (
                <div key={i} className={styles["table-item"]}>
                  <div className={styles["platform"]}>
                    <img
                      src={platForm?.image}
                      height={24}
                      width={24}
                      alt=""
                    ></img>
                    <span>{platForm?.platform}</span>
                  </div>
                  <div className={styles["name"]}>
                    <span>{platForm?.name}</span>
                  </div>
                  <div className={styles["desc"]}>
                    <span>{platForm?.description}</span>
                  </div>

                  <div className={styles["rating"]}>
                    <span>{platForm?.ratingValue}</span>
                    <Image
                      src="/rating-yellow.svg"
                      width={18}
                      height={18}
                      alt="no-image"
                    />
                    <span>({platForm?.reviewCount})</span>
                  </div>
                  <div className={styles["item-price"]}>
                    <span>
                      {productData?.priceCurrency} {platForm?.price}
                    </span>
                  </div>
                  {/* <div className={styles["chart"]}>
      <LargeAreaChart chartId={`chart-${platForm?.name}`} />
      
         
          
        </div> */}
                </div>
              );
            })}
          </div>
          <div className={styles["download-button"]}>
            <button>See All Comparison</button>
          </div>
        </div>
      </div>
      <div className={styles["product-analytics"]}>
        <h2>Product Analytics</h2>

        <div className={styles["tabs-wrapper"]}>
          {productData?.product_data.map((platform: any, index: number) => {
            return (
              <Tab
                key={platform?.name}
                tabData={platform}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            );
          })}
        </div>

        <div className={styles["paltform-data-render"]}>
          <div className={styles["product"]}>
            <ProductCardForPlatform activeTab={activeTab} />
          </div>

          <div className={styles["line-chart"]}>
            <div className={styles["days-wrapper"]}>
              <LineChart
                chartTimePeriod={chartTimePeriod}
                chartData={chartData}
              />

              <div className={styles["days-container"]}>
                <span
                  className={chartTimePeriod == "7" ? styles["active"] : ""}
                  onClick={() => setChartTimePeriod("7")}
                >
                  7 days
                </span>
                <span
                  className={chartTimePeriod == "30" ? styles["active"] : ""}
                  onClick={() => setChartTimePeriod("30")}
                >
                  1 Month
                </span>
                <span
                  className={chartTimePeriod == "90" ? styles["active"] : ""}
                  onClick={() => setChartTimePeriod("90")}
                >
                  Qtr
                </span>
                <span
                  className={chartTimePeriod == "180" ? styles["active"] : ""}
                  onClick={() => setChartTimePeriod("180")}
                >
                  Half
                </span>
                <span
                  className={chartTimePeriod == "365" ? styles["active"] : ""}
                  onClick={() => setChartTimePeriod("365")}
                >
                  Year
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
