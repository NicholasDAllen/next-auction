import { Button, Input, Box} from '@material-ui/core';
import React, { useState } from 'react';

export const BidForm = ({id}) => {
    const [bid, setBid] = useState('');

    const updateBid = (event) => {
        setBid(event.target.value);
        // Post bid here
    };

    const placeBid = () => {
        console.log(bid);
        // send bid to server ...
        setBid('');
    }

    return (
        <Box>
            <Input value={bid} onChange={updateBid} type="number" /><br />
            <Button className="primary" onClick={placeBid}>Place Bid</Button>
        </Box>
    );
};