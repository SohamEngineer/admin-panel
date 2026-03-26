"use client"

import React from "react"
import { DataTable } from "../../components/data-table/data-table"
import { userTableData } from "@/src/data/user-management/user-table-data"
import { userTableColumns } from "../../components/features/user-table/columns"
// import { userTableColumns } from "@/features/user-table/columns"

function Usermanagement() {
  return (
   
    <div className="w-full">
      <div className="space-y-8 container-page">

        <section>
          <DataTable
      data={userTableData}
      columns={userTableColumns}
      getRowId={(row) => row.id.toString()}
    />
      </section>
    </div>

      </div>
  )
}

export default Usermanagement
