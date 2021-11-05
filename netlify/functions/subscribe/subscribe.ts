import axios from 'axios'
import { Handler } from '@netlify/functions'

const client = require('@sendgrid/client')

export const handler: Handler = async (event) => {
  const body = JSON.parse(event.body ?? '{}')
  const isRealUser = await checkReCAPTCHA(body.token, 'subscribe')
  if (isRealUser) {
    try {
      const lists = body.listId ? [body.listId] : [process.env.MAIN_LIST_ID]
      const result = await addContactToList(
        [{ email: body.email }],
        body.subscribeGlobal ? [process.env.MAIN_LIST_ID, ...lists] : lists
      )
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      }
    } catch (e) {
      return {
        statusCode: 400,
        body: JSON.stringify(e),
      }
    }
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'wrong request' }),
    }
  }
}

async function checkReCAPTCHA(token: string, action: string): Promise<boolean> {
  const { data }: any = await axios.get(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  )
  return data.success && data.action === action
}

async function addContactToList(contacts: any[], lists: string[]) {
  const createListRequest = {
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: {
      list_ids: lists,
      contacts,
    },
  }
  try {
    const [result] = await client.request(createListRequest)
    return result.body
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Error with subscription ${e.message}`)
  }
}
