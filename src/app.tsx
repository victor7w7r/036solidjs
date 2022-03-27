import type { Component, JSX } from 'solid-js';
import { Route, Router, Routes } from 'solid-app-router';

import { MainLayout } from './components/layouts/MainLayout';

import { Home } from './pages/Home';
import { ReduxEx } from './pages/ReduxEx';

import './styles/style.scss';

export const App: Component = (): JSX.Element => {

    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/redux" element={<ReduxEx />} />
                    <Route path="/" element={<Home />}/>
                </Routes>
            </MainLayout>
        </Router>
    );
};