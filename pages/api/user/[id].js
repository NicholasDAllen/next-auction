import { sleep } from "../../../util/sleep";

const users = {
    1: {
        'name': "A. Person",
    },
    2: {
        "name": "Steve Bidds"
    },
    3: {
        "name": "Jane Smith"
    }
}

export default async function handler(req, res) {
    await sleep(5);
    const {id} = req.query;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users[id]);
  }
