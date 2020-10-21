import { Button, Input, Box} from '@material-ui/core';
import React, { useState } from 'react';

const postBid = (id, bid) => {
    const body = JSON.stringify({
        bid,
    });

    return fetch(`api/item/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body,
    });
}

export const BidForm = ({id, mutate, isValidating, data}) => {
    const [bid, setBid] = useState('');

    const updateBid = (event) => {
        setBid(event.target.value);
        // Post bid here
    };

    const placeBid = () => {
        mutate({
            ...data,
            currentBid: bid,
        }, postBid(id, bid));
        setBid('');
    }

    return (
        <Box>
            <Input value={bid} onChange={updateBid} type="number" /><br />
            <Button disabled={isValidating} className="primary" onClick={placeBid}>Place Bid</Button>
        </Box>
    );
};