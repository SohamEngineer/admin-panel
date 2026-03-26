"use client"

import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../components/ui/sidebar"

import { NavItem } from "@/src/types/navigation"

function isItemActive(item: NavItem, pathname: string): boolean {
  if (item.url === pathname) return true
  if (!item.items) return false
  return item.items.some((child) =>
    isItemActive(child, pathname)
  )
}

export function NavMain({
  items,
  label = "Platform",
}: {
  items: NavItem[]
  label?: string
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const active = isItemActive(item, pathname)
          const hasSubItems =
            item.items && item.items.length > 0

          const Icon = item.icon

          // ✅ SIMPLE LINK (NO SUB ITEMS)
          if (!hasSubItems) {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={active}
                  tooltip={item.title}
                >
                  <Link href={item.url!}>
                    {Icon && (
                      <Icon className="h-4 w-4" />
                    )}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          // ✅ DROPDOWN
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={active}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={active}
                  >
                    {Icon && (
                      <Icon className="h-4 w-4" />
                    )}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items!.map((subItem) => {
                      const subActive =
                        pathname === subItem.url

                      return (
                        <SidebarMenuSubItem
                          key={subItem.title}
                        >
                          <SidebarMenuSubButton
                            asChild
                            isActive={subActive}
                          >
                            <Link href={subItem.url}>
                              <span>
                                {subItem.title}
                              </span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
