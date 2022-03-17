import type { Component, JSX } from 'solid-js';
import { Route, Router, Routes } from 'solid-app-router';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { ReduxEx } from './pages/Reduxex';

import './styles/style.scss';

export const App: Component = (): JSX.Element => {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/redux" element={<ReduxEx />} />
            </Routes>
        </Router>
    );
};