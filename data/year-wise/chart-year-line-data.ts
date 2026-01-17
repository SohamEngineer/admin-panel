
import { ChartConfigMap } from "@/types/line-chart"

export const chartYearLineData = [
  { year: "2015", desktop: 1200 },
  { year: "2016", desktop: 1800 },
  { year: "2017", desktop: 2400 },
  { year: "2018", desktop: 3100 },
  { year: "2019", desktop: 4200 },
  { year: "2020", desktop: 3900 },
  { year: "2021", desktop: 5200 },
  { year: "2022", desktop: 6100 },
  { year: "2023", desktop: 7200 },
  { year: "2024", desktop: 8500 },
]

export const chartYearLineConfig: ChartConfigMap = {
  desktop: {
    label: "Desktop Users",
    color: "var(--chart-1)",
  },
}

