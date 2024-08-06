'use client'
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement,Tooltip,Legend)
const DoughnutChart = ({accounts} : DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'banks',
        data: [1250, 2500, 3700, 5600, 2342],
        backgroundColor: ['#07b746', '#2265d8', '#2191Fa', '#eefafc']
      }
    ],
    labels: ['bank1', 'bank2', 'bank3', 'bank4']
  }
  return (
    <div>
      <Doughnut data={data} options={{
        cutout:'50%',
        plugins:{
          legend: {
            display: false
          }
        }
      }} />
    </div>
  )
}

export default DoughnutChart
