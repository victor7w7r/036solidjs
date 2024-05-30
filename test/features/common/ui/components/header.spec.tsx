import { render, screen } from '@solidjs/testing-library'

import { Header } from '@/common/ui/components/header/header'

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

describe('header', () => {
  it('renders the header component correctly', () => {
    expect.assertions(3)

    render(() => <Header />)

    const logo = screen.getByAltText('')
    expect(logo).toBeInTheDocument()

    expect(screen.getByText('Toggler Component')).toBeInTheDocument()
    expect(screen.getByText('Solidjs Template')).toBeInTheDocument()
  })

  it('applies the correct class based on the theme', () => {
    expect.assertions(1)

    render(() => <Header />)

    const navbar = screen.getByRole('navigation')
    expect(navbar).toHaveClass('navbar bg-cyan-700/30')
  })
})
