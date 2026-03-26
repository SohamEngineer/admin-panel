import { LucideIcon } from "lucide-react"

type BaseNavItem = {
  title: string
  icon?: LucideIcon
}

/** Clickable link */
export type NavLinkItem = BaseNavItem & {
  url: string
  items?: never
}

/** Group with children */
export type NavGroupItem = BaseNavItem & {
  items: NavLinkItem[]
  url?: never
}

export type NavItem = NavLinkItem | NavGroupItem
