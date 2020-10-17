import { sleep } from "../../util/sleep"

export default async function handler(req, res) {
    await sleep(3);
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([1,2,3]))
  }
