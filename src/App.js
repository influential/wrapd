import { useState, useEffect } from 'react';
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

    return (
        <>
            <h1>Wrapd.</h1>
            <Login />
            <Dashboard />
        </>
       
    );
}

export default App;