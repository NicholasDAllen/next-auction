import useSWR from 'swr'

const BidForm = ({id}) => {
    let bid = null;

    const updateBid = (event) => {
        bid = event.target.value;
        // Post bid here
    };

    const placeBid = () => {
        console.log(bid);
    }

    return (
        <div>
            <input onChange={updateBid} type="number" />
            <button onClick={placeBid}>Place Bid</button>
        </div>
    );
};

const getItem = async (url) => {
    const result = await fetch(url);
    return result.json();
}

export const AuctionItem = ({id}) => {
    const { data, error } = useSWR(`api/item/${id}`, getItem);

    if (error) return <div className='auction_item'>failed to load</div>
    if (!data) return <div className='auction_item'>loading...</div>

    return (
        <div className='auction_item'>
            <div className='item_name'>{data.name}</div>
            <div className='item_price'>{data.currentBid}</div>
            <div className='bid_form'>
                <BidForm id={id} />
            </div>
        </div>
    );
};
