import {
  FaUserTimes,   // expired users
  FaRegStar,    // standard plan
  FaCrown,      // premium plan
} from "react-icons/fa"
import { StatsCardItem } from "@/src/types/stats"

export const ExpiredOverviewData: StatsCardItem[] = [
  {
    id: "expired-subscription",
    title: "Expired Subscriptions",
    total: 410,
    icon: FaUserTimes,
    bgColor: "bg-red-300",
    iconColor: "text-black",
  },
  {
    id: "standard-plan",
    title: "Standard Plan",
    total: 1840,
    icon: FaRegStar,
    bgColor: "bg-blue-300",
    iconColor: "text-black",
  },
  {
    id: "premium-plan",
    title: "Premium Plan",
    total: 1320,
    icon: FaCrown,
    bgColor: "bg-purple-300",
    iconColor: "text-black",
  },
]
