import { Author } from '~/models/author'

export interface CommunityEvent {
  slug: string
  title: string
  theme?: string
  // eslint-disable-next-line camelcase
  eventDate: string
  edate?: number
  listId?: string
  language: string
  link: string
  authors: Array<Author>
}
