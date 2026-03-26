import {
  FaUserPlus,   // new users / new subscriptions
  FaRegStar,   // standard plan
  FaCrown,     // premium plan
} from "react-icons/fa"
import { StatsCardItem } from "@/src/types/stats"

export const NewOverviewData: StatsCardItem[] = [
  {
    id: "new-subscription",
    title: "New Subscriptions",
    total: 560,
    icon: FaUserPlus,
    bgColor: "bg-green-300",
    iconColor: "text-black",
  },
  {
    id: "standard-plan",
    title: "Standard Plan",
    total: 340,
    icon: FaRegStar,
    bgColor: "bg-blue-300",
    iconColor: "text-black",
  },
  {
    id: "premium-plan",
    title: "Premium Plan",
    total: 220,
    icon: FaCrown,
    bgColor: "bg-purple-300",
    iconColor: "text-black",
  },
]
