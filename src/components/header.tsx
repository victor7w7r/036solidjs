import type { Component, JSX } from 'solid-js';
import { Link } from 'solid-app-router';

import logo from "../assets/logo.png";

export const Header: Component = (): JSX.Element => {

    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">
                <img src={logo} width="45" height="45"alt="" />
                <Link href="/"><div className="btn btn-dark">&nbsp; solidjs + TS Template</div></Link>
            </div>
            <div className="d-flex">
                <Link href="/redux"><div className="btn btn-dark mr-2">Redux Example</div></Link>
            </div>
        </div>
    );
};