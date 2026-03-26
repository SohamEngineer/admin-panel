import {
  FaMusic,
  FaCompactDisc,
  FaUsers,
  FaListUl,
} from "react-icons/fa"
import { StatsCardItem } from "@/src/types/stats"

export const Platformdata: StatsCardItem[] = [
  {
    id: "songs",
    title: "Total Songs",
    total: 10000,
    icon: FaMusic,
    bgColor: "bg-amber-300",
    iconColor: "text-black",
  },
  {
    id: "albums",
    title: "Total Albums",
    total: 3200,
    icon: FaCompactDisc,
    bgColor: "bg-blue-300",
    iconColor: "text-black",
  },
  {
    id: "users",
    title: "Total Users",
    total: 12450,
    icon: FaUsers,
    bgColor: "bg-green-300",
    iconColor: "text-black",
  },
  {
    id: "playlists",
    title: "Total Playlists",
    total: 860,
    icon: FaListUl,
    bgColor: "bg-purple-300",
    iconColor: "text-black",
  },
]
