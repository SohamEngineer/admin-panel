"use client"
import { StatsCards } from '../../../components/cardgrid'
import { DataTable } from '../../../components/data-table/data-table'
import { failedpayTableColumns } from '../../../components/features/failed-pay/columns'
import { successfulpayTableColumns } from '../../../components/features/successful-pay/successful-pay'
import { failedpayTableData } from '@/src/data/payment/failed.payment'
import { paymentOverviewData } from '@/src/data/payment/payment.card'
import { successfulpayTableData } from '@/src/data/payment/successfull.payment'

import React from 'react'

function Payment() {
  return (
    <div className="w-full">
      <div className="space-y-8 container-page">
        <section>
          <StatsCards
            title="Platform Overview"
            data={paymentOverviewData}
          />
        </section>
        
        <section>
          <DataTable
            data={successfulpayTableData}
            columns={successfulpayTableColumns}
            getRowId={(row) => row.id.toString()}
          />
        </section>
        <section>
          <DataTable
            data={failedpayTableData}
            columns={failedpayTableColumns}
            getRowId={(row) => row.id.toString()}
          />
        </section>

      </div>
    </div>
  )
}

export default Payment