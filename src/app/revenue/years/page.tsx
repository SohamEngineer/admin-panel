"use client"
import { StatsCards } from '../../../components/cardgrid'
import { ChartBarInteractive } from '../../../components/chart-bar-interactive'
import { ChartLineLinear } from '../../../components/chart-line-linear'
import { chartYearBarConfig, chartYearBarData } from '@/src/data/year-wise/chart-year-bar-data'
import { chartYearLineConfig, chartYearLineData } from '@/src/data/year-wise/chart-year-line-data'
import { RevenueYaerData } from '@/src/data/year-wise/year-wise-data'
import React from 'react'

function Yearwise() {
  return (
    <div className='w-full'>
    <div className='container-page space-y-3s'>
      <StatsCards
        title="Revenue Overview"
        data={RevenueYaerData}
      />
      <section>
      <ChartLineLinear
      title="Yearly Growth Trend"
      subtitle="2015 - 2024"
      data={chartYearLineData}
      config={chartYearLineConfig}
      dataKey="desktop"
      xKey="year"
      height={350}
    />
    </section>
    <section>
    <ChartBarInteractive
      title="Yearly Platform Comparison"
      subtitle="Desktop vs Mobile"
      data={chartYearBarData}
      config={chartYearBarConfig}
    />
    </section>
    </div>
    </div>
  )
}

export default Yearwise