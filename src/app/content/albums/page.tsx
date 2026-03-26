"use client"
import { DataTable } from '../../../components/data-table/data-table'
import { albumTableColumns } from '../../../components/features/album-management/columns'
import { albumData } from '@/src/data/albumdata/album-table.data'
import React from 'react'

function Album() {
  return (
    // <div className='container-page'>

    
<div className="w-full">
          <div className="space-y-8 container-page">
    
            <section>
              
  <DataTable
        data={albumData}
        columns={albumTableColumns}
        getRowId={(row) => row.id}
        
      />
          </section>
        </div>
    
          </div>  )
}

export default Album