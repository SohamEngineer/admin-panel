"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Trash2, Pencil } from "lucide-react"
// import { SongTableRow } from "@/types/song-tables"
import { Button } from "../../../components/ui/button"
import { AlbumTableRow } from "@/src/types/album-table"

export const albumTableColumns: ColumnDef<AlbumTableRow>[] = [
  { accessorKey: "title", header: "Title" },
  { accessorKey: "release", header: "Release" },
  { accessorKey: "time", header: "Time" },

  // ✅ ACTION COLUMN (UI-only)
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const song = row.original

      return (
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              console.log("Update song:", song.id)
            }}
          >
            <Pencil size={16} />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            className="bg-accent-foreground"
            onClick={() => {
              console.log("Delete song:", song.id)
            }}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      )
    },
  },
]
