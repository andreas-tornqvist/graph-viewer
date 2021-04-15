import { format } from 'date-fns';
import Chart from '../../components/chart.js';
import Layout from '../../components/layout';
import graphStyles from '../../styles/graph.module.css';
// import { useEffect } from 'react';
// import { useEffect } from 'react';
// import React from 'react';
// import ConvertDate from '../../components/convert-date';
// import { Line } from 'react-chartjs-2';
// import { Chart } from 'chart.js';
// import PlotBox from '../../components/plot-box';
// export function componentDidMount() {
//   console.log('mounted');
// }

export async function getStaticProps({ params }) {

  let timeFormat = 'yyyy-MM-dd HH:mm';
  let now = new Date();
  let to = format(now, timeFormat);
  let from = format(now.setDate(now.getDate() - 1), timeFormat);
  let response = await fetch(`http://launchpadmcquack-001-site1.htempurl.com/api/measurement/${params.areacode}?start=${from}&end=`);  //2021-04-13%2016:08
  let data = await response.json();
  let min = data[0].Temperature;
  let max = data[1].Temperature;
  for (let point of data) {
    if (point.Temperature < min) {
      min = point.Temperature;
    }
    else if (point.Temperature > max) {
      max = point.Temperature;
    }
  }
  return {
    props:
    {
      graphData: {
        name: 'Baksidan',
        data,
        min,
        max
      }
    }
  }
}

export function getStaticPaths() {
  return {
    paths: [{
      params: {
        areacode: 'bak'
      }
    },
    {
      params: {
        areacode: 'grg'
      }
    }],
    fallback: false
  }
}

export default function Graph({ graphData }) {
  const data = [{
    id: "Read",
    data: graphData.data.map(d => {
      return {
        x: new Date(d.Time),
        y: d.Temperature
      }
    })
  }];
  const interval = graphData.max - graphData.min;
  return <Layout>
    <div className={graphStyles.container}>
      <Chart data={data} className={graphStyles.container} 
      min={graphData.min - interval*0.1} 
      max={graphData.max + interval*0.1}/>
    </div>
  </Layout>
}