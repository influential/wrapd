import { useState, useEffect } from 'react';
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useSelector } from 'react-redux';

function App() {
    const { isLoggedIn } = useSelector(state => state.user);

    return (
        <>
            <h1>Wrapd.</h1>
            <Login />
            { isLoggedIn && <Dashboard /> }
        </>
       
    );
}

export default App;