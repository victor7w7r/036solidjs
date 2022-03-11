import type { Component, JSX } from 'solid-js';
import { Route, Router, Routes } from 'solid-app-router';

import { Header } from './components/header';
import { Home } from './pages/home';
import { ReduxEx } from './pages/reduxex';

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