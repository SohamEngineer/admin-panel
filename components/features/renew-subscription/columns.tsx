import { ColumnDef } from "@tanstack/react-table"
import { RenewSubTable } from "@/types/renew-sub"

export const renewSubTableColumns: ColumnDef<RenewSubTable>[] = [
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
    accessorKey: "previous",
    header: "Previous Date",
  },
  
  {
    accessorKey: "renew",
    header: "Renew Date",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  
  
  
]
