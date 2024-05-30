import { render, screen } from '@solidjs/testing-library'

import Layout from '@/common/ui/layout/layout'

vi.mock('@/common/ui/hooks', () => {
  const useThemeMock = vi.fn().mockReturnValue({ control: 'bg-cyan-700/30' })
  return { useTheme: useThemeMock }
})

vi.mock('@solidjs/router', () => ({
  A: (props: { children: JSX.Element }) => <a>{props.children}</a>
}))

vi.mock('@/common/ui/components/toggler/toggler', () => ({
  Toggler: () => <div>Toggler Component</div>
}))

describe('layout', () => {
  it('renders children inside main element with Header', () => {
    expect.assertions(2)

    const ChildComponent = () => <div data-testid='child'>Child Component</div>
    render(() => (
      <Layout>
        <ChildComponent />
      </Layout>
    ))

    expect(screen.getByRole('navigation')).toBeInTheDocument()

    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
