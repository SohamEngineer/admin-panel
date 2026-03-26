import {
  FaRupeeSign,
  FaUserPlus,
  FaSyncAlt,
  FaUserTimes,
  FaChartLine,
} from "react-icons/fa"
import { StatsCardItem } from "@/src/types/stats"

export const RevenueYaerData: StatsCardItem[] = [
  {
    id: "total-revenue",
    title: "Total Revenue",
    total: 12500000, // ₹1.25 Cr
    icon: FaRupeeSign,
    bgColor: "bg-green-300",
    iconColor: "text-black",
  },
  {
    id: "new-subscriptions",
    title: "New Subscriptions",
    total: 1840,
    icon: FaUserPlus,
    bgColor: "bg-blue-300",
    iconColor: "text-black",
  },
  {
    id: "renew-subscriptions",
    title: "Renewed Subscriptions",
    total: 1320,
    icon: FaSyncAlt,
    bgColor: "bg-emerald-300",
    iconColor: "text-black",
  },
  {
    id: "expired-subscriptions",
    title: "Expired Subscriptions",
    total: 410,
    icon: FaUserTimes,
    bgColor: "bg-red-300",
    iconColor: "text-black",
  },
  {
    id: "net-revenue",
    title: "Net Revenue",
    total: 10950000, // after refunds / expiries
    icon: FaChartLine,
    bgColor: "bg-purple-300",
    iconColor: "text-black",
  },
]
