import { IconType } from "react-icons"

export interface StatsCardItem {
  id: string
  title: string
  total: number
  icon: IconType
  bgColor: string
  iconColor: string
}
