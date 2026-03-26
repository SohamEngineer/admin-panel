import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { FaDownload } from "react-icons/fa"
import { ActiveSubTableRow } from "@/src/types/active-sub"

export const activeSubTableColumns: ColumnDef<ActiveSubTableRow>[] = [
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
    id: "billing",
    header: "Billing",
    cell: ({ row }) => {
      const email = row.getValue("email") as string

      return (
        <button
          className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
          onClick={() => {
            // Replace with real download logic later
            console.log("Download invoice for:", email)
          }}
        >
          <FaDownload className="h-4 w-4" />
          Download
        </button>
      )
    },
  },
  {
    accessorKey: "start",
    header: "Start",
  },
  {
    accessorKey: "expire",
    header: "Expire",
  },
]
