import { ColumnDef } from "@tanstack/react-table"
import { NewSubTable } from "@/src/types/new-sub"

export const newSubTableColumns: ColumnDef<NewSubTable>[] = [
  {
    accessorKey: "username",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "plan",
    header: "Plan",
  },
  {
    accessorKey: "start",
    header: "Start Date",
  },
  
  {
    accessorKey: "expire",
    header: "Expired Date",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  
  
  
]
