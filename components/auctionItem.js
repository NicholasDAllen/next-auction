import useSWR from 'swr';
import React from 'react';
import { Grid, Box, Card } from '@material-ui/core';
import { BidForm } from './bidForm';
import Skeleton from 'react-loading-skeleton';
import { Bidder } from '../components/bidder';

const getItem = async (url) => {
    const result = await fetch(url);
    return result.json();
}

export const AuctionItem = ({id}) => {
    const swrKey = `/api/item/${id}`;
    const { data, error, isValidating, mutate } = useSWR(
        swrKey,
        getItem,
        {
            revalidateOnFocus: true,
        });

    if (error) return <div className='auction_item'>failed to load</div>

    const price = data? data.currentBid : 'XXX';
    const name = data? data.name : <Skeleton />;
    const loadingStyle = isValidating? 'isLoading': '';
    const bidder = data? <Bidder id={data.bidder} bidIsLoading={isValidating} /> : <Skeleton />

    return (
        <Card className='auction_item'>
            <Grid
                container
                direction="row"
                justify="center" alignItems="center">
                    <Box className={`item_name ${loadingStyle}`}>{name}</Box>
                    <Box>
                        <div className={`item_price ${loadingStyle}`}>${price}</div>
                        {bidder}
                    </Box>
                    <Card className='bid_form'>
                        <BidForm id={id} mutate={mutate} isValidating={isValidating} data={data} bidderId={1} />
                    </Card>
            </Grid>
        </Card>
    );
};
