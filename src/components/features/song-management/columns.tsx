"use client"

import { ColumnDef } from "@tanstack/react-table"
// import { Button } from "@/components/ui/button"
import { Trash2, Pencil } from "lucide-react"
import { SongTableRow } from "@/src/types/song-tables"
import { Button } from "../../../components/ui/button"

export const songTableColumns: ColumnDef<SongTableRow>[] = [
  { accessorKey: "title", header: "Title" },
  { accessorKey: "release", header: "Release" },
  { accessorKey: "artist", header: "Artist" },
  { accessorKey: "language", header: "Language" },
  { accessorKey: "album", header: "Album" },
  { accessorKey: "playlist", header: "Playlist" },
  { accessorKey: "mood", header: "Mood" },
  { accessorKey: "time", header: "Time" },
  { accessorKey: "likes", header: "Likes" },
  { accessorKey: "views", header: "Views" },

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
