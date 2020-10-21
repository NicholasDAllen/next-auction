import useSWR from 'swr'
import React from 'react';
import { Grid, Box, Card } from '@material-ui/core';
import { BidForm } from './bidForm';
import Skeleton from 'react-loading-skeleton';

const getItem = async (url) => {
    const result = await fetch(url);
    return result.json();
}

export const AuctionItem = ({id}) => {
    const { data, error } = useSWR(`api/item/${id}`, getItem);

    if (error) return <div className='auction_item'>failed to load</div>

    const price = data? data.currentBid : 'XXX';
    const name = data? data.name : <Skeleton />;
    const loadingStyle = data? '': 'isLoading';

    return (
        <Card className='auction_item'>
            <Grid
                container
                direction="row"
                justify="center" alignItems="center">
                    <Box className={`item_name ${loadingStyle}`}>{name}</Box>
                    <div className={`item_price ${loadingStyle}`}>${price}</div>
                    <Card className='bid_form'>
                        <BidForm id={id} />
                    </Card>
            </Grid>
        </Card>
    );
};
