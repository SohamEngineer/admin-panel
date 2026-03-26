import {
  FaSyncAlt,   // renewed / refreshed
  FaUserTimes // not renewed / churned
} from "react-icons/fa"
import { StatsCardItem } from "@/src/types/stats"

export const RenewOverviewData: StatsCardItem[] = [
  {
    id: "renewed-subscriptions",
    title: "Renewed Subscriptions",
    total: 420,
    icon: FaSyncAlt,
    bgColor: "bg-emerald-300",
    iconColor: "text-black",
  },
  {
    id: "not-renewed",
    title: "Not Renewed",
    total: 140,
    icon: FaUserTimes,
    bgColor: "bg-red-300",
    iconColor: "text-black",
  },
]
