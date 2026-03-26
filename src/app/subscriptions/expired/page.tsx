"use client"
import { StatsCards } from '../../../components/cardgrid'
import { ChartPie } from '../../../components/chart-pie-simple'
import { DataTable } from '../../../components/data-table/data-table'
import { expiredTableColumns } from '../../../components/features/expired-subscription/columns'
import { ExpiredSub } from '@/src/data/expired-sub/expired-sub'
import { ExpiredOverviewData } from '@/src/data/expired-sub/expired-sub-card'
import { expiredPieData } from '@/src/data/expired-sub/expired-sub-pie'
import React from 'react'

function Expired() {
  return (
    <div className="w-full">
      <div className="space-y-8 container-page">

        <section>
          <StatsCards
            title="Expired Subscriptions"
            data={ExpiredOverviewData}
          />
        </section>

        <section>
          <DataTable
            data={ExpiredSub}
            columns={expiredTableColumns}
            getRowId={(row) => row.id.toString()}
          />
        </section>

        <section>
          <ChartPie
            title="User Distribution"
            subtitle="By Subscription Plan"
            data={expiredPieData}
            height={280}
            showLegend
          />
        </section>
      </div>
    </div>
  )
}

export default Expired