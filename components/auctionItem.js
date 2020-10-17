import useSWR from 'swr'
import React, { useState } from 'react';
import { Grid, Button, Input, Box, Card, Paper } from '@material-ui/core';

const BidForm = ({id}) => {
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
            <Button className="Primary" onClick={placeBid}>Place Bid</Button>
        </Box>
    );
};

const getItem = async (url) => {
    const result = await fetch(url);
    return result.json();
}

export const AuctionItem = ({id}) => {
    const { data, error } = useSWR(`api/item/${id}`, getItem);

    if (error) return <div className='auction_item'>failed to load</div>

    const price = data? data.currentBid : 'XXX';
    const name = data? data.name : 'Loading ...';

    return (
        <Card className='auction_item'>
            <Grid
                container
                direction="row"
                justify="center" alignItems="center">
                    <Box className='item_name'>{name}</Box>
                    <div className='item_price'>${price}</div>
                    <Card className='bid_form'>
                        <BidForm id={id} />
                    </Card>
            </Grid>
        </Card>
    );
};
