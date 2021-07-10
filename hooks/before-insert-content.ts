const client = require("@sendgrid/client");
client.setApiKey(process.env.SENDGRID_API_KEY);

export default async (document: any) => {

  const request = {
    method: "GET",
    url: "/v3/marketing/lists"
  };
  const [, result] = await client.request(request);
  const mailLists = result.result.reduce((obj: any, item: any) => {
    return {
      ...obj,
      [item.name]: item.id
    };
  }, {});
  if (document.extension === ".md" && document.eventDate) {
    document.edate = Date.parse(document.eventDate);
    if (!mailLists.hasOwnProperty(document.slug)) {
      const createListRequest = {
        method: "POST",
        url: "/v3/marketing/lists",
        body: {
          name: document.slug
        }
      };
      try {
        const [, result] = await client.request(createListRequest);
        document.listId = result.id;
      } catch (e) {
        console.error(`Error with creation list for ${document.slug} ${e.message}`);
      }
    } else {
      document.listId = mailLists[document.slug];
    }
  }
}
