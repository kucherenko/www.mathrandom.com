import { IAuthor } from '~/models/author'

export interface ICommunityEvent {
  slug: string
  title: string
  card?: string
  description?: string
  // eslint-disable-next-line camelcase
  eventDate: string
  edate?: number
  listId?: string
  language: string
  link: string
  authors: Array<IAuthor>
}
