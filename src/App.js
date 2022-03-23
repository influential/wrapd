import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;