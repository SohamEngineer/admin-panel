"use client"
import { StatsCards } from '@/components/cardgrid'
import { ChartPie } from '@/components/chart-pie-simple'
import { DataTable } from '@/components/data-table/data-table'
import { renewSubTableColumns } from '@/components/features/renew-subscription/columns'
// import { renewPieData } from '@/data/active-sub/active-pie'
import { RenewSub } from '@/data/renew-sub/renew-sub'
import { RenewOverviewData } from '@/data/renew-sub/renew-sub-card'
import { renewPieData } from '@/data/renew-sub/renew-sub.pie'
import React from 'react'

function Renew() {
  return (
     <div className="w-full">
              <div className="space-y-8 container-page">
        
                <section>
                  <StatsCards
                    title="Renew Subscriptions"
                    data={RenewOverviewData}
                  />
                </section>
        
                <section>
                          <DataTable
                      data={RenewSub}
                      columns={renewSubTableColumns}
                      getRowId={(row) => row.id.toString()}
                    />
                      </section>
        
        <section>
                  <ChartPie
                    title="User Distribution"
                    subtitle="By Subscription Plan"
                    data={renewPieData}
                    height={280}
                    showLegend
                  />
                </section>
              </div>
            </div>
  )
}

export default Renew