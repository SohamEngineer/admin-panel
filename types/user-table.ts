export type Status = "In Process" | "Done"
export type Plan = "Standard Plan" | "Premium"
export type Action = "View"

export interface UserTableRow {
  id: number
  fullname: string
  email: string
  status: Status
  plan: Plan
  details: string
  action: Action
}
