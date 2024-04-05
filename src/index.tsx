import '~/styles/index.css'

import { render } from 'solid-js/web'

import { App } from './app.tsx'

// eslint-disable-next-line toplevel/no-toplevel-side-effect, @typescript-eslint/no-non-null-assertion
render(() => <App />, document.querySelector('#root')!)
