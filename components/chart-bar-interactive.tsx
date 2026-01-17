"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type ChartBarInteractiveProps = {
  title: string
  subtitle?: string
  data: Array<Record<string, any>>
  config: Record<string, { label: string; color?: string }>
}

export function ChartBarInteractive({
  title,
  subtitle,
  data,
  config,
}: ChartBarInteractiveProps) {
  const keys = Object.keys(config)
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof config>(keys[0])

  const total = React.useMemo(() => {
    return keys.reduce((acc, key) => {
      acc[key] = data.reduce((sum, item) => sum + (item[key] ?? 0), 0)
      return acc
    }, {} as Record<string, number>)
  }, [data, keys])

  return (
    <div>
      <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 text-2xl">
        <CardTitle>{title}</CardTitle>
      </div>
      <Card className="py-0">
        <CardHeader className="flex flex-col items-center ml-2 border-b !p-0 sm:flex-row justify-between ">
          {subtitle && <CardDescription>{subtitle}</CardDescription>}

          <div className="flex">
            {keys.map((key) => (
              <button
                key={key}
                data-active={activeChart === key}
                className="data-[active=true]:bg-muted/50 flex flex-1 flex-col gap-1 border-l px-6 py-4 text-left"
                onClick={() => setActiveChart(key)}
              >
                <span className="text-muted-foreground text-xs">
                  {config[key].label}
                </span>
                <span className="text-lg font-bold">
                  {total[key]?.toLocaleString()}
                </span>
              </button>
            ))}
          </div>
        </CardHeader>

        <CardContent className="px-2 sm:p-6">
          <ChartContainer config={config} className="h-[250px] w-full">
            <BarChart data={data} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => String(value)}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    nameKey={activeChart}
                    labelFormatter={(value) => String(value)}
                  />
                }
              />
              <Bar
                dataKey={activeChart}
                fill={`var(--color-${activeChart})`}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
