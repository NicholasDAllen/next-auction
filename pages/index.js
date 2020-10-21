import useSWR from 'swr'
import { Grid } from '@material-ui/core';
import { AuctionItem } from '../components/auctionItem';

const getItems = async () => {
  const result = await fetch('/api/items');
  return result.json();
}

export default function Home() {
  const { data, error } = useSWR('api/items', getItems,{
    revalidateOnFocus: false,
  });

  if (error) return <div>failed to load</div>;
  let items = <div>Loading...</div>;
  if (data) { 
    items = data.map((i) => <AuctionItem key={i} id={i}/>);
  }

  return [
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <h2 key='header'>Auction Items</h2>
      {items}
    </Grid>
  ];
}
