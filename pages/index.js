import useSWR from 'swr'
import { AuctionItem } from '../components/auctionItem';

const getItems = async () => {
  const result = await fetch('/api/items');
  return result.json();
}

export default function Home() {
  const { data, error } = useSWR('api/items', getItems);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const items = data.map((i) => <AuctionItem id={i}/>);
  return [].concat(<h2>Auction Items</h2>, items);
}
