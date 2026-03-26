"use client"

import { StatsCards } from '../../../components/cardgrid'
import { ChartPie } from '../../../components/chart-pie-simple'
import { DataTable } from '../../../components/data-table/data-table'
import { newSubTableColumns } from '../../../components/features/new-subscription/columns'
import { NewSub } from '@/src/data/new-sub/new-sub'
import { NewOverviewData } from '@/src/data/new-sub/new-sub-card'
import { newPieData } from '@/src/data/new-sub/new-sub-pie'
import React from 'react'

function New() {
  return (
    <div className="w-full">
      <div className="space-y-8 container-page">

        <section>
          <StatsCards
            title="New Subscriptions"
            data={NewOverviewData}
          />
        </section>

        <section>
          <DataTable
            data={NewSub}
            columns={newSubTableColumns}
            getRowId={(row) => row.id.toString()}
          />
        </section>
        <section>
          <ChartPie
            title="User Distribution"
            subtitle="By Subscription Plan"
            data={newPieData}
            height={280}
            showLegend
          />
        </section>
      </div>
    </div>
  )
}

export default New