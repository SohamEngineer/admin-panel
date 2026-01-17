import {
  FaUsers,
  FaRegStar,
  FaCrown,
} from "react-icons/fa"
import { StatsCardItem } from "@/types/stats"

export const ActivesubOverviewData: StatsCardItem[] = [
  {
    id: "active-subscriptions",
    title: "Active Subscriptions",
    total: 3250,
    icon: FaUsers,
    bgColor: "bg-green-300",
    iconColor: "text-black",
  },
  {
    id: "standard-plan",
    title: "Standard Plan",
    total: 2100,
    icon: FaRegStar,
    bgColor: "bg-blue-300",
    iconColor: "text-black",
  },
  {
    id: "premium-plan",
    title: "Premium Plan",
    total: 1150,
    icon: FaCrown,
    bgColor: "bg-purple-300",
    iconColor: "text-black",
  },
]
