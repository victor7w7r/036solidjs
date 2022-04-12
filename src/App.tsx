import type { Component, JSX } from 'solid-js';
import { Route, Router, Routes } from 'solid-app-router';
import { StoreonProvider } from '@storeon/solidjs'

import { MainLayout } from './components/layouts/MainLayout';
import { store } from './store';

import { Home } from './pages/Home';
import { StoreEx } from './pages/StoreEx';

import './styles/style.scss';

export const App: Component = (): JSX.Element => (
    <Router>
        <StoreonProvider store={store}>
            <MainLayout>
                <Routes>
                    <Route path="/store" element={<StoreEx />} />
                    <Route path="/" element={<Home />}/>
                </Routes>
            </MainLayout>
        </StoreonProvider>
    </Router>
);