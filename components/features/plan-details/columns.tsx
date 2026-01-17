import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { PlanTableRow } from "@/types/plan-table"
// import { UserTableRow } from "@/types/user-table"

export const planTableColumns: ColumnDef<PlanTableRow>[] = [
  {
    accessorKey: "plan",
    header: "Plan",
  },
  {
    accessorKey: "pricing",
    header: "Pricing",
  },
  {
    accessorKey: "billing",
    header: "Billing",
  },
  {
    accessorKey: "active_users",
    header: "Active Users",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.status === "Active" ? "default" : "secondary"}>
        {row.original.status}
      </Badge>
    ),
  },
  
  
]
