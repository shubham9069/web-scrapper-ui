import * as echarts from "echarts";
import { useEffect } from "react";
type EChartsOption = echarts.EChartsOption;

const LargeAreaChart = ({ chartId }: any) => {
  useEffect(() => {
    const chartDom = document.getElementById(chartId);
    const myChart = echarts.init(chartDom);

    const option = {
      grid: { show: false },
      tooltip: {
        trigger: "axis",
        position: function (pt: any) {
          return [pt[0], "10%"];
        },
      },

      xAxis: {
        show: false,
        type: "category",
        boundaryGap: false,
        data: [],
        showGrid: false,
      },
      yAxis: {
        show: false,
        splitLine: {
          show: false,
        },
        type: "value",
        boundaryGap: [0, "100%"],
        max: 20,
      },

      series: [
        {
          name: "Fake Data",
          type: "line",
          symbol: "none",
          sampling: "lttb",
          itemStyle: {
            color: "#13b7f2",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0.8, 1, [
              {
                offset: 0,
                color: "rgb(244, 201, 107)",
              },
              {
                offset: 1,
                color: "#13b7f2",
              },
            ]),
          },
          data: [1, 10, 15, 20],
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);
  return <div id={chartId} style={{ height: "100%", width: "100%" }} />;
};

export default LargeAreaChart;
