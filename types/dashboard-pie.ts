export type ChartPieItem = {
  name: string
  value: number
  color?: string
}

export type ChartPieProps = {
  title: string
  subtitle?: string
  data: ChartPieItem[]
  height?: number
  showLegend?: boolean
}
