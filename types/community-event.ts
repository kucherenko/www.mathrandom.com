import type { Author } from "~/types/author";

export interface CommunityEvent {
  title: string
  language: 'Russian' | 'English' | 'Ukrainian'
  eventDate: string
  card?: string
  link: string
  description: string
  authors: Author[]
  _path: string
  date: Date
  tags?: string[]
  icon?: string
}
