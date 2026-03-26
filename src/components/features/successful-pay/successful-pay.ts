import { ColumnDef } from "@tanstack/react-table"
import { SuccessfulTableRow } from "@/src/types/successfulPay"
// import { PlanTableRow } from "@/types/plan-table"
// import { UserTableRow } from "@/types/user-table"

export const successfulpayTableColumns: ColumnDef<SuccessfulTableRow>[] = [
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
]
