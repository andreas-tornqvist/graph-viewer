import React from 'react'
import { ResponsiveLine } from '@nivo/line'

// import data from '../data'
// import config from './chart.config'


export default function Chart({data}) {
  return (
    <div className="chart">
      <ResponsiveLine
      data={data}
      margin={{
        top: 0,
        right: 50,
        bottom: 50,
        left: 50
      }}
      yScale={{
        type: "linear",
        stacked: false
      }}
      xScale={{
        type: "time",
        precision: "day",
        format: "native"
      }}
      axisBottom={{
        format: "%b %d"
      }}
    />
      <style jsx>{
        `
                   .chart {
                        height:50vh;
                        width:60vw;
                        background: white;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                        transition: 0.3s;
                    }
                    
                    .chart:hover {
                         box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                    }
                    `
      }
      </style>
    </div>
  )
}