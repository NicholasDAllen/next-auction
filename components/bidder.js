import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import { Box } from '@material-ui/core';

const getUser = async (url) => {
    const result = await fetch(url);
    return result.json();
};

export const Bidder = ({id, bidIsLoading}) => {
    if(!id) {
        return <div />
    }

    const { data, error } = useSWR(`api/user/${id}`, getUser,{
        revalidateOnFocus: false,
    });

    const name = data? data.name : <Skeleton />;
    const loadingStyle = bidIsLoading? 'isLoading': '';
    return <div className={`${loadingStyle}`}>{name}</div>;
}