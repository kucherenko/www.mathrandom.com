import { ServerMiddleware } from "@nuxt/types";

const myServerMiddleware: ServerMiddleware =  (req, res: any, next) => {
  console.log('!!!');
  // res.setBody('ololo');
  res.end('Ololo');
}

export default myServerMiddleware
