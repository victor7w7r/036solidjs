import type { Component, JSX } from 'solid-js'

const Layout: Component<Readonly<{ children?: JSX.Element }>> = props => (
  <main>
    Hello
    {props.children}
  </main>
)

export default Layout
