import { format } from 'date-fns';
import Chart from '../../components/chart.js';
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
  let response = await fetch(`http://launchpadmcquack-001-site1.htempurl.com/api/measurement/${params.parameters}?start=${from}&end=`);  //2021-04-13%2016:08
  let data = await response.json();
  return {
    props:
    {
      graphData: {
        name: 'Baksidan',
        from,
        to,
        data
      }
    }
  }
}

export function getStaticPaths() {
  return {
    paths: [{
      params: {
        parameters: 'bak'
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
    })}];
    
  return <>
    Hej!
    <div className="container">
      <Chart data={data} />
      <style jsx global>{`
            body {
                height: 100vh;
                width: 100vw;
                display: grid;
                text-align: center;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </div>
  </>
}