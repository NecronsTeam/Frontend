import { ICompetency } from "./ICompetency"

export interface IActivityFormData {
  name: string,
  description: string,
  orgChatLink: string,
  dateFrom: string
  dateTo: string,
  competenciesIds: number[]
}