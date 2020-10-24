import { sleep } from "../../../util/sleep";

const items = {
    1: {
        "name": "Famous Painting", 
        "currentBid": 15,
        "bidder": 2,
    },
    2: {
        "name": "A Sculpture", 
        "currentBid": 20,
        "bidder": 1,
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
            item.bidder = req.body.bidder;
        }
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(item);
  }
