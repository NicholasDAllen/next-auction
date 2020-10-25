import { Button, Input, Box } from '@material-ui/core';
import React, { useState } from 'react';

const postBid = (id, bid, bidderId) => {
    const body = JSON.stringify({
        bid,
        bidder: bidderId,
    });

    return fetch(`/api/item/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body,
    });
}

export const BidForm = ({ id, mutate, isValidating, data, bidderId }) => {
    const [bid, setBid] = useState('');

    const updateBid = (event) => {
        setBid(event.target.value);
    };

    const placeBid = () => {
        mutate({
            ...data,
            currentBid: bid,
            bidder: bidderId
        }, postBid(id, bid, bidderId));
        setBid('');
    }

    return (
        <Box>
            <Input value={bid} onChange={updateBid} type="number" /><br />
            <Button disabled={isValidating} className="primary" onClick={placeBid}>Place Bid</Button>
        </Box>
    );
};