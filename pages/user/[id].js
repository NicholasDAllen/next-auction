import { Grid } from '@material-ui/core';
import { AuctionItem } from '../../components/auctionItem';
import { NavBar } from '../../components/navbar';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const getUser = async (url) => {
    const result = await fetch(url);
    return result.json();
};

export default function UserPage() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return null;
    }

    const { data, error } = useSWR(`/api/user/${id}`, getUser, {
        revalidateOnFocus: false,
    });

    let items = <div>Loading...</div>;
    if (data) {
        console.log(data.items);
        items = data.items.map((i) => <AuctionItem key={i} id={i} />);
    }

    const name = data ? data.name : '...';

    return [
        <NavBar />,
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <h2 key='header'>{name}'s Bids</h2>
            {items}
        </Grid>
    ];
};