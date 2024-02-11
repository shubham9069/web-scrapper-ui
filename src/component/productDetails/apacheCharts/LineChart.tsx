import * as echarts from "echarts";
import { useEffect } from "react";
type EChartsOption = echarts.EChartsOption;

const LineChart = ({ chartTimePeriod, chartData }: any) => {
  const genrateData = {
    array:
      chartTimePeriod == "7"
        ? [...Array(7)]
        : chartTimePeriod == "30"
        ? [...Array(30)]
        : chartTimePeriod == "90"
        ? [...Array(3)]
        : chartTimePeriod == "180"
        ? [...Array(6)]
        : [...Array(12)],

    type: chartTimePeriod == "7" || chartTimePeriod == "30" ? "day" : "month",
  };

  useEffect(() => {
    const chartDom = document.getElementById("pricechart");
    const PriceChart = echarts.init(chartDom);
    const data = genrateData?.array?.map((date, i) => {
      if (genrateData?.type == "day") {
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() - i);
        return [todayDate?.toLocaleDateString(), Math.random() * 100];
      } else {
        let todayDate = new Date();
        todayDate.setMonth(todayDate.getMonth() - i);
        return [todayDate?.toLocaleDateString(), Math.random() * 100];
      }
    });
    const dateList = data.map(function (item) {
      return item[0];
    });
    const valueList = data.map(function (item) {
      return item[1];
    });
    let priceOption = {
      // Make gradient line here

      visualMap: [
        {
          show: false,
          type: "continuous",
          seriesIndex: 0,
          dimension: 0,
          min: 0,
          max: dateList.length - 1,
        },
      ],
      title: [{}],
      tooltip: {
        trigger: "axis",
      },
      xAxis: [
        {
          axisLabel: {
            color: "#d9d9e8",
          },
          data: dateList,
        },
      ],
      yAxis: [
        {
          axisLabel: {
            color: "#d9d9e8",
          },
        },
      ],
      grid: [{}],
      series: [
        {
          name: "Price",
          type: "line",
          lineStyle: {
            color: "#13b7f2",
          },
          markPoint: {
            itemStyle: {
              borderColor: "#000",
              color: "#000",
            },
          },
          emphasis: {
            focus: "series",
          },
          data: valueList,
          xAxisIndex: 0,
          yAxisIndex: 0,
        },
      ],
    };

    priceOption && PriceChart.setOption(priceOption, true);
  }, [chartTimePeriod]);
  return <div id="pricechart" style={{ height: "100%", width: "100%" }} />;
};

export default LineChart;
