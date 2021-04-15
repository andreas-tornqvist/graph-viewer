import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import styles from './chart.module.css';

// import data from '../data'
// import config from './chart.config'


export default function Chart({data, min, max}) {
  return (
    <div className={styles.chart}>
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
        stacked: false,
        min: min,
        max: max
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
    </div>
  )
}