"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 198, mobile: 150 },
  { month: "August", desktop: 256, mobile: 170 },
  { month: "September", desktop: 289, mobile: 160 },
  { month: "October", desktop: 312, mobile: 210 },
  { month: "November", desktop: 275, mobile: 190 },
  { month: "December", desktop: 340, mobile: 230 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaGradient() {
  return (
    <div>
    <div className="mb-4 flex items-center justify-between px-4">
        <p className="text-2xl font-bold">New Released</p>
      </div>
    <Card className="">
      <CardHeader>
        <CardTitle>Platform Overview</CardTitle>
        <CardDescription>
          Showing total visitors for the last 12 months
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{ left: 12, right: 12 }}
            accessibilityLayer
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>

              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <Area
              type="natural"
              dataKey="mobile"
              stroke="var(--color-mobile)"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
            />

            <Area
              type="natural"
              dataKey="desktop"
              stroke="var(--color-desktop)"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground leading-none">
              January – December 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}
