import type { Component, JSX } from 'solid-js';
import { Route, Router, Routes } from 'solid-app-router';

import { MainLayout } from './components/layouts/MainLayout';
import { DataProvider } from './context/DataContext';

import { Home } from './pages/Home';
import { StoreEx } from './pages/StoreEx';

import './styles/style.scss';

export const App: Component = (): JSX.Element => 
    <Router>
        <DataProvider>
            <MainLayout>
                <Routing />
            </MainLayout>
        </DataProvider>
    </Router>;
    
const Routing: Component = (): JSX.Element =>
    <Routes>
        <Route path="/store" element={<StoreEx />} />
        <Route path="/" element={<Home />}/>
    </Routes>;