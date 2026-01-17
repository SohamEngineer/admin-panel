import {
  FaUsers,
  FaRegStar,
  FaCrown,
} from "react-icons/fa"
import { StatsCardItem } from "@/types/stats"

export const paymentOverviewData: StatsCardItem[] = [
  {
    id: "total-amount",
    title: "Total Amount",
    total: 10000,
    icon: FaUsers,
    bgColor: "bg-green-300",
    iconColor: "text-black",
  },
  {
    id: "successful-payment",
    title: "Successful Payment",
    total: 100,
    icon: FaRegStar,
    bgColor: "bg-blue-300",
    iconColor: "text-black",
  },
  {
    id: "failed-payment",
    title: "Failed Payment",
    total: 50,
    icon: FaCrown,
    bgColor: "bg-purple-300",
    iconColor: "text-black",
  },
]
