import { ICompetency } from "./ICompetency"

export interface IActivity {
  id: number
  name: string
  description: string
  orgChatLink: string
  dateFrom: string
  dateTo: string
  creatorUserId: number
  previewPhotoId: number,
  competencies: ICompetency[]
}