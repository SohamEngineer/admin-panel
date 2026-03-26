export type ActivePieItem = {
  name: string
  value: number
  color?: string
}
export type ActivePieProps = {
  title: string
  subtitle?: string
  data: ActivePieItem[]
  height?: number
  showLegend?: boolean
}
