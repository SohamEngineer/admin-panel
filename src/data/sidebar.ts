// src/data/sidebar.ts

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react"

export const sidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "User Management",
      url: "/users-management",
      icon: Bot,
    },
    {
      title: "Content Management",
      icon: BookOpen,
      items: [
        { title: "Song Management", url: "/content/songs" },
        { title: "Album Management", url: "/content/albums" },
        { title: "Playlist Management", url: "/content/playlists" },
      ],
    },
    {
      title: "Revenue",
      icon: BookOpen,
      items: [
        { title: "Monthwise Revenue", url: "/revenue/months" },
        { title: "Yearwise Revenue", url: "/revenue/years" },
      ],
    },
    {
      title: "Subscription Management",
      icon: BookOpen,
      items: [
        { title: "Plan Details", url: "/subscriptions/plans" },
        { title: "Active Subscription", url: "/subscriptions/active" },
        { title: "Renew Subscription", url: "/subscriptions/renew" },
        { title: "New Subscription", url: "/subscriptions/new" },
        { title: "Expired Subscription", url: "/subscriptions/expired" },
      ],
    },
    {
      title: "Payment Management",
      icon: Settings2,
      items: [
        { title: "Payments", url: "/payments-management/payments" },
        { title: "Invoices", url: "/payments-management/invoices" },
      ],
    },
    {
      title: "Upload Songs",
      url: "/upload",
      icon: Settings2,
    },
  ],
}
