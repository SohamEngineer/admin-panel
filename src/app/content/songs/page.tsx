"use client"

import React from "react"
import { DataTable } from "../../../components/data-table/data-table"
import { songTableColumns } from "../../../components/features/song-management/columns"
import { songTableData } from "@/src/data/songdata/song-table-data"

function Songs() {
  return (
    
    <div className="w-full">
          <div className="space-y-8 container-page">
    
            <section>
              <DataTable
      data={songTableData}
      columns={songTableColumns}
      getRowId={(row) => row.id}
    />
          </section>
        </div>
    
          </div>
  )
}

export default Songs
