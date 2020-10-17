import useSWR from 'swr'
import { Grid } from '@material-ui/core';
import { AuctionItem } from '../components/auctionItem';

const getItems = async () => {
  const result = await fetch('/api/items');
  return result.json();
}

export default function Home() {
  const { data, error } = useSWR('api/items', getItems);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const items = data.map((i) => <AuctionItem key={i} id={i}/>);
  return (
    <h2 key='header'>Auction Items</h2>,
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      {items}
    </Grid>
    );
}
