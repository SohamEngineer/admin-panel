"use client"

// import { StatsCard } from "./stats-card"
import { StatsCardItem } from "@/src/types/stats"
import { StatsCard } from "./stats-cards/stats-card"

interface StatsCardsProps {
  title?: string
  data: StatsCardItem[]
}

export function StatsCards({ title, data }: StatsCardsProps) {
  if (!Array.isArray(data)) return null

  return (
    <div className="w-full">
      {title && (
        <div className="mb-4 px-4">
          <p className="text-2xl font-bold">{title}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {data.map((item) => (
          <StatsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
