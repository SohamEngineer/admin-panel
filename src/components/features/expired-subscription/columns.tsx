import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { ExpiredSubTable } from "@/src/types/expired-sub"
// import { UserTableRow } from "@/types/user-table"

export const expiredTableColumns: ColumnDef<ExpiredSubTable>[] = [
  {
    accessorKey: "username",
    header: "User name",
  },
  {
    accessorKey: "plan",
    header: "Plan",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "expire",
    header: "Expired",
  },
]
