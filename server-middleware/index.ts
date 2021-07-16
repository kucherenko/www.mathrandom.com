import axios from "axios";

const client = require("@sendgrid/client");
const bodyParser = require("body-parser");
const app = require("express")();
console.log('!!!' + process.env.SENDGRID_API_KEY +'???')
client.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = { path: "/api/v1", handler: app };

app.use(bodyParser.json());

app.post("/subscribe", async (req: any, res: any) => {
  const isRealUser = await checkReCAPTCHA(req.body.token, "subscribe");
  if (isRealUser) {
    try {
      const lists = req.body.listId ? [req.body.listId] : [process.env.MAIN_LIST_ID]
      const result = await addContactToList(
        [{ email: req.body.email }],
        req.body.subscribeGlobal ? [process.env.MAIN_LIST_ID, ...lists] : lists
      );
      res.json(result);
    } catch (e) {
      res.status(400)
      res.json(e);
    }
  } else {
    res.status(400)
    res.json({ error: "wrong request" });
  }
});

async function checkReCAPTCHA(token: string, action: string): Promise<boolean> {
  const { data } = await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`);
  return data.success && data.action === action;
}

async function addContactToList(contacts: any[], lists: string[]) {
  const createListRequest = {
    method: "PUT",
    url: "/v3/marketing/contacts",
    body: {
      list_ids: lists,
      contacts
    }
  };
  try {
    const [result] = await client.request(createListRequest);
    return result.body;
  } catch (e) {
    console.error(`Error with subscription ${e.message}`);
  }
}
