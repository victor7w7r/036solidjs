import type { Component, JSX } from 'solid-js';

import { Header } from '../Header';

export const MainLayout: Component<{children: JSX.Element}> = (props): JSX.Element => (
    <>
        <Header />
        <main>{props.children}</main>
    </>
);