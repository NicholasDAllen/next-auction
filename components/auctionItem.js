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

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div class='auction_item'>
            <div class='item_name'>{data.name}</div>
            <div class='item_price'>{data.currentBid}</div>
            <div class='bid_form'>
                <BidForm />
            </div>
        </div>
    );
};
