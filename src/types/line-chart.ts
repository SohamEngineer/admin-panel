export type ChartMetricConfig = {
  label: string
  color?: string
}

export type ChartConfigMap = Record<string, ChartMetricConfig>

export type ChartDataPoint = Record<string, string | number>

export type ChartLineLinearProps = {
  title: string
  subtitle?: string
  data: ChartDataPoint[]
  config: ChartConfigMap
  dataKey: string
  xKey?: string
  height?: number
}
