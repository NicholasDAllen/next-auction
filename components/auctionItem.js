import useSWR from 'swr'

const BidForm = () => {
    return (
        <form>
            <input />
            <button>Place Bid</button>
        </form>
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
                <BidForm />
            </div>
        </div>
    );
};
