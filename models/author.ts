import { ILink } from '~/models/link'

export interface IAuthor {
  name: string
  title: string
  about: string
  image: string
  links: Array<ILink> | Array<string>
}
