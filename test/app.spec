import { render, screen } from '@solidjs/testing-library'

import { App } from '../src/app'

vi.mock('@solidjs/router', () => ({
  Router: (props: { children: JSX.Element }) => <div>{props.children}</div>,
  routes: []
}))

vi.mock('@tanstack/solid-query-devtools', () => ({
  SolidQueryDevtools: () => <div>Devtools</div>
}))

describe('app', () => {
  it('renders without crashing', () => {
    expect.assertions(1)
    render(() => <App />)
    expect(screen.getByText('Devtools')).toBeInTheDocument()
  })
})
