import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { UserTableRow } from "@/types/user-table"

export const userTableColumns: ColumnDef<UserTableRow>[] = [
  {
    accessorKey: "fullname",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.status === "Done" ? "default" : "secondary"}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "plan",
    header: "Plan",
  },
  {
    accessorKey: "details",
    header: "Details",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => (
      <button className="text-sm font-medium text-primary hover:underline">
        View
      </button>
    ),
  },
]
