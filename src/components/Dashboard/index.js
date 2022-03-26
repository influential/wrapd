import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setLoginRedirect } from '../../redux/user';
import TopItems from './TopItems';

import { DashboardContainer } from './Dashboard.styled';

function Dashboard() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { isLoggedIn, loginRedirect } = useSelector(state => state.user);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }

        if (isLoggedIn && loginRedirect) {
            dispatch(setLoginRedirect(false));
        } 
    })

    return (
        <DashboardContainer>
            <TopItems />


        </DashboardContainer>


    )
}

export default Dashboard;