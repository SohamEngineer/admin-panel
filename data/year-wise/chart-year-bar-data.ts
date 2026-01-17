import { ChartConfigMap } from "@/types/line-chart"

export const chartYearBarData = [
  { date: "2019", desktop: 4200, mobile: 3800 },
  { date: "2020", desktop: 3900, mobile: 4100 },
  { date: "2021", desktop: 5200, mobile: 5600 },
  { date: "2022", desktop: 6100, mobile: 6500 },
  { date: "2023", desktop: 7200, mobile: 7800 },
  { date: "2024", desktop: 8500, mobile: 9100 },
]

export const chartYearBarConfig: ChartConfigMap = {
  desktop: {
    label: "Desktop Users",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile Users",
    color: "var(--chart-1)",
  },
}