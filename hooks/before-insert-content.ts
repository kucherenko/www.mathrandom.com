const { Client } = require('@sendgrid/client')
const ImageKit = require('imagekit')
const slugify = require('slugify')

interface Image {
  id: string
  name: string
  tags: string[]
}

class SendgridService {
  client: any
  lists: any

  constructor(apiKey: string | undefined) {
    this.client = new Client()
    this.client.setApiKey(apiKey)
  }

  async getLists(cache: boolean = true) {
    if (!this.lists || !cache) {
      const request = {
        method: 'GET',
        url: '/v3/marketing/lists',
      }
      const [, result] = await this.client.request(request)
      this.lists = result.result.reduce((obj: any, item: any) => {
        return {
          ...obj,
          [item.name]: item.id,
        }
      }, {})
    }
    return this.lists
  }

  async createList(slug: string) {
    const createListRequest = {
      method: 'POST',
      url: '/v3/marketing/lists',
      body: {
        name: slug,
      },
    }
    try {
      const [, result] = await this.client.request(createListRequest)
      this.lists[slug] = result.id
      return result.id
    } catch (e) {
      console.error(`Error with creation list for ${slug} ${e.message}`)
    }
  }

  getListIdBySlug(slug: string) {
    return this.lists[slug]
  }
}

class ImageKitService {
  private imagekit: any
  private images: Image[]

  constructor(
    publicKey: string | undefined,
    privateKey: string | undefined,
    urlEndpoint: string | undefined,
    private path: string
  ) {
    this.imagekit = new ImageKit({
      publicKey,
      privateKey,
      urlEndpoint,
    })
  }

  async getImagesList(cache: boolean = true) {
    if (!this.images || !cache) {
      this.images = await this.imagekit.listFiles({
        limit: 100,
        path: this.path,
      })
      console.log(this.images)
    }
    return this.images
  }

  async upload(url: string, name: string) {
    const avatar = slugify(name, { lower: true })
    const fileName = `${avatar}.png`
    console.log(`Uploaded avatar for ${avatar}`)
    return await this.imagekit.upload({
      file: url,
      fileName,
      folder: this.path,
      tags: avatar,
    })
  }

  hasAvatar(name: string) {
    const avatar = slugify(name, { lower: true })
    return this.images.some((image) => {
      return image.tags.includes(avatar)
    })
  }

  findAvatar(name: string) {
    const avatar = slugify(name, { lower: true })
    return this.images.find((image) => {
      return image.tags.includes(avatar)
    })
  }
}

function initialize() {
  const imageKitService = new ImageKitService(
    process.env.IMAGEKIT_PUBLIC_KEY,
    process.env.IMAGEKIT_PRIVATE_KEY,
    process.env.IMAGEKIT_URL_ENDPOINT,
    'math-random-avatars'
  )
  const sendgridService = new SendgridService(process.env.SENDGRID_API_KEY)

  return async (document: any) => {
    await sendgridService.getLists()
    await imageKitService.getImagesList()
    if (document.extension === '.md' && document.eventDate) {
      document.edate = Date.parse(document.eventDate)
      if (!sendgridService.getListIdBySlug(document.slug)) {
        await sendgridService.createList(document.slug)
        document.listId = sendgridService.getListIdBySlug(document.slug)
      } else {
        document.listId = sendgridService.getListIdBySlug(document.slug)
      }

      document.authors = await Promise.all(
        document.authors.map(async (author: any) => {
          const avatar: any = imageKitService.findAvatar(author.name)
          if (!avatar) {
            const res = await imageKitService.upload(author.image, author.name)
            author.image = res.url + '?tr=w-100,h-100,fo-face'
          } else {
            author.image = avatar.url + '?tr=w-100,h-100,fo-face'
          }
          return author
        })
      )
    }
  }
}

export default initialize()
