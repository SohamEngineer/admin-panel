import { FailedfulTableRow } from "@/types/failed-pay"
import { ColumnDef } from "@tanstack/react-table"

export const failedpayTableColumns: ColumnDef<FailedfulTableRow>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
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
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "resign",
    header: "Resign",
  },
]
