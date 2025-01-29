// src/components/Graph.js
import React, { useEffect, useState, useRef } from 'react';
import ReactECharts from 'echarts-for-react';

const Graph = ({ metric, device, title }) => {
  const [data, setData] = useState({ timeseries: [], values: [] });
  const chartRef = useRef(null);

  useEffect(() => {
    fetch(`https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`)
      .then(response => response.json())
      .then(data => {
        if (data.timeseries && data.values) {
          setData(data);
        } else {
          console.error('Data structure is not as expected:', data);
          setData({ timeseries: [], values: [] });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setData({ timeseries: [], values: [] });
      });
  }, [metric, device]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().resize();
    }
  }, [data]);


  
  const options = {
    title: {
      text: title,
      
      // textStyle: {
      //   color: 'inherit', // Inherit color from parent element
      // },
      // className: 'echarts-title',
    },
    xAxis: {
      type: 'category',
      data: data.timeseries,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.values,
        type: 'line',
      },
    ],
  };

  return <ReactECharts ref={chartRef} option={options} style={{ height: '400px', width: '100%'  }} />;
};

export default Graph;
