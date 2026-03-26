"use client"

import { StatsCards } from "../components/cardgrid"
import { ChartPie,  } from "../components/chart-pie-simple"
import { ChartAreaGradient } from "../components/month-linechart"
import { SectionCards } from "../components/section-cards"
import { chartPieData } from "../data/dashboard/dashboard.pie"
import { Platformdata } from "../data/platform-overview/platform-overview"
// import { StatsCards } from "../components/stats-cards/stats-cards"

function Dashboard() {
  return (
    <div className="w-full">
      <div className="space-y-8 container-page">

        <section>
          <SectionCards />
        </section>

        {/* ✅ ONLY grid wrapper used */}
        <section>
          <StatsCards
            title="Platform Overview"
            data={Platformdata}
          />
        </section>

        <section className="lg:flex gap-6">
          <div className="flex-1">
            <ChartAreaGradient />
          </div >
          <div>
            <div className="mb-4 flex items-center justify-between px-4">
              <p className="text-2xl font-bold">Free Vs Stenderd Vs Premium</p>
            </div>
            <ChartPie
              title="User Distribution"
              subtitle="By Subscription Plan"
              data={chartPieData}
              height={280}
              showLegend
            />
          </div>
        </section>

      </div>
    </div>
  )
}

export default Dashboard
