"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { StatsCardItem } from "@/src/types/stats"

interface StatsCardProps {
  item: StatsCardItem
}

export function StatsCard({ item }: StatsCardProps) {
  const Icon = item.icon

  return (
    <Card className="flex flex-row items-center gap-4 py-6 justify-center">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full   ${item.bgColor}`}
      >
        <Icon className={`h-6 w-6  ${item.iconColor}`} />
      </div>

      <div className="max-w-24 w-full overflow-hidden text-ellipsis whitespace-nowrap">
        <CardHeader className="p-0  ">
          <CardTitle className="text-sm font-medium text-muted-foreground ">
            {item.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <p className="text-3xl font-bold tabular-nums">
  {item.total.toLocaleString("en-IN")}
          </p>
        </CardContent>
      </div>
    </Card>
  )
}
