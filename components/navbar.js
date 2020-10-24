import useSWR from 'swr';

const getUser = async (url) => {
    const result = await fetch(url);
    return result.json();
};

import { AppBar, Typography } from '@material-ui/core';
export const NavBar = () => {
    const userName = "A. Person";
    const userPage = '/user/1';
    return (<AppBar position="static">
                <Typography variant="h6">
                    Hi <a href={userPage}>{userName}</a>!
                </Typography>
            </AppBar>);
};