import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import "./globals.css"
import { ModeToggle } from "@/components/dark-mode"
import {ThemeProvider} from "../components/theme-provider"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <SidebarProvider>
          <AppSidebar />

          <SidebarInset>
            {/* Fixed Header */}
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
              <SidebarTrigger className="-ml-1 " />
              
            <ModeToggle/>
            </header>

            {/* Dynamic Page Content */}
            <main className="flex flex-1 flex-col gap-4 p-4">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
