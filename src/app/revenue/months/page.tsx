"use client"
// import { StatsCard } from '@/components/stats-cards/stats-card'
import { StatsCards } from '../../../components/cardgrid'
import { ChartBarInteractive } from '../../../components/chart-bar-interactive'
import { ChartLineLinear } from '../../../components/chart-line-linear'
import { chartLineConfig, chartLineData } from '@/src/data/month-wise/chart-line-data'
import { RevenueOverviewData } from '@/src/data/month-wise/monthwise-data'
import { chartBarConfig, chartBarData } from '@/src/data/month-wise/yearwise-data'
import React from 'react'

function Month() {
  return (
    <>
    <div className="w-full">
          <div className="space-y-8 container-page">
            <section>
    <StatsCards
  title="Revenue Overview"
  data={RevenueOverviewData}
/>
</section>
<section >
 <ChartLineLinear
      title="Daily Visitors"
      subtitle="January 2015"
      data={chartLineData}
      config={chartLineConfig}
      dataKey="desktop"
      height={350}
    />
</section>
<section className=''>
<ChartBarInteractive
      title="New Released"
      subtitle="Last 30 days activity"
      data={chartBarData}
      config={chartBarConfig}
    />
    </section>
</div>
</div>
</>
  )
}

export default Month