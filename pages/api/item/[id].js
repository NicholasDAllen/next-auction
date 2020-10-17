import { sleep } from "../../../util/sleep";

const items = {
    1: {
        "name": "Famous Painting", 
        "currentBid": 10,
        "bidder": null,
    },
    2: {
        "name": "A Sculpture", 
        "currentBid": 10,
        "bidder": null,
    },
    3: {
        "name": "Book of Photographs", 
        "currentBid": 10,
        "bidder": null,
    }
};

export default async function handler(req, res) {
    await sleep(3);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const {id} = req.query;
    res.json(items[id]);
  }
