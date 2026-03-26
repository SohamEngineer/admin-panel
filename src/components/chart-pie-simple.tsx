"use client"

import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { ChartPieProps } from "@/src/types/dashboard-pie"

// import { type ChartPieProps } from "@/types/charts"

export function ChartPie({
  title,
  subtitle,
  data,
  height = 300,
  showLegend = true,
}: ChartPieProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card className="w-full  mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>

      <CardContent>
        <div style={{ height }} className="w-full">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                label={(entry) =>
                  `${entry.name} (${Math.round(
                    (entry.value / total) * 100
                  )}%)`
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color || "var(--chart-1)"}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value: number, name: string) => [
                  value.toLocaleString(),
                  name,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {showLegend && (
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {data.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
