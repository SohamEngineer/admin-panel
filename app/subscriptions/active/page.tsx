"use client"
import { StatsCards } from '@/components/cardgrid'
import { ChartPie } from '@/components/chart-pie-simple'
import { DataTable } from '@/components/data-table/data-table'
import { activeSubTableColumns } from '@/components/features/active-subscription/columns'
import { activePieData } from '@/data/active-sub/active-pie'
import { ActivesubOverviewData } from '@/data/active-sub/active-sub.data'
import { activeSubTableData } from '@/data/active-sub/active-sub.table.data'
import React from 'react'

function Active() {
  return (
    <div className="w-full">
      <div className="space-y-8 container-page">

        <section>
          <StatsCards
            title="Active Subscriptions"
            data={ActivesubOverviewData}
          />
        </section>

        <section>
          <DataTable
            data={activeSubTableData}
            columns={activeSubTableColumns}
            getRowId={(row) => row.id.toString()}
          />
        </section>
        <section>
          <ChartPie
            title="User Distribution"
            subtitle="By Subscription Plan"
            data={activePieData}
            height={280}
            showLegend
          />
        </section>

      </div>
    </div>
  )
}

export default Active