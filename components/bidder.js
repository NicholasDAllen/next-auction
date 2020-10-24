import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';

const getUser = async (url) => {
    const result = await fetch(url);
    return result.json();
};

export const Bidder = ({id, bidIsLoading}) => {
    if(!id) {
        return <div />
    }

    const { data, error } = useSWR(`/api/user/${id}`, getUser,{
        revalidateOnFocus: false,
    });

    const name = data? data.name : <Skeleton />;
    const loadingStyle = bidIsLoading? 'isLoading': '';
    const userPageLink = `/user/${id}`;
    return <a href={userPageLink}><div className={`${loadingStyle}`}>{name}</div></a>;
}