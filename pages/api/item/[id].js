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
    const {id} = req.query;
    const item = items[id];
    if (req.method === 'POST') {
        if (req.body.bid > item.currentBid) {
            item.currentBid = req.body.bid;
        }
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(item);
  }
