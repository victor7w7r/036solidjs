import type { Component, JSX } from 'solid-js';

import { Header } from '../Header';

export const MainLayout: Component = ({ children }): JSX.Element => (
    <>
        <Header />
        <main>{children}</main>
    </>
);