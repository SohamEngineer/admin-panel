"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart"
import { ChartLineLinearProps } from "@/src/types/line-chart"

// import { type ChartLineLinearProps } from "@/types/charts"

export function ChartLineLinear({
  title,
  subtitle,
  data,
  config,
  dataKey,
  xKey = "date",
  height = 400,
}: ChartLineLinearProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={config}
          className="aspect-auto w-full"
          style={{ height }}
        >
          <LineChart data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                typeof value === "string" ? value.slice(0, 5) : value
              }
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Line
              dataKey={dataKey}
              type="linear"
              stroke={`var(--color-${dataKey})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
