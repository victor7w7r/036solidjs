import type { Component, JSX } from 'solid-js';
import { Route, Router, Routes } from 'solid-app-router';

import { DataProvider, ThemeProvider } from './context';

import { HomePage } from './pages/HomePage';
import { StorePage } from './pages/StorePage';

import './index.scss';

export const App: Component = (): JSX.Element => 
    <Router>
        <DataProvider>
            <ThemeProvider>
                <Routing />
            </ThemeProvider>
        </DataProvider>
    </Router>;
    
const Routing: Component = (): JSX.Element =>
    <Routes>
        <Route path="/store" element={<StorePage />} />
        <Route path="/" element={<HomePage />}/>
    </Routes>;