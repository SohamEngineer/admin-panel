"use client"
import { ChartPie } from '../../../components/chart-pie-simple'
import { DataTable } from '../../../components/data-table/data-table'
import { planTableColumns } from '../../../components/features/plan-details/columns'
import { chartPieData } from '@/src/data/dashboard/dashboard.pie'
import { planTableData } from '@/src/data/subscription/plan-data-table'
import React from 'react'

function Plandetails() {
  return (
    <div className="w-full">
      <div className="space-y-8 container-page">

        <section>
          <DataTable
            data={planTableData}
            columns={planTableColumns}
            getRowId={(row) => row.id.toString()}
          />
        </section>

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
      </div>

    </div>
  )
}

export default Plandetails