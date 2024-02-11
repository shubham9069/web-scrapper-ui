import * as echarts from 'echarts';
import { useEffect } from "react";
type EChartsOption = echarts.EChartsOption;


const BarChart = () => {
    
  useEffect(()=>{
  
  
    const barChart = document.getElementById('barchart');
    const  barChartshow = echarts.init(barChart);
   
    
   
    const  barOption = {
      
      title: {
        text: 'Ratings Chart',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: 'amazone' },
            { value: 310, name: 'flipkart' },
            { value: 274, name: 'kroger' },
            { value: 235, name: 'safeguard' },
            { value: 400, name: 'walmart' }
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: 'black'
          },
          labelLine: {
            lineStyle: {
              color: 'black'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#ffb100',
            
          
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function () {
            return Math.random() * 200;
          }
        }
      ]
    };
    
    
    barOption && barChartshow.setOption(barOption);
  
    
  },[])
  return (
    <div id="barchart" style={{height:'100%',width:'100%'}}/>
  )
}

export default BarChart