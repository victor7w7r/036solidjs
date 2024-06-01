import { render, screen } from '@solidjs/testing-library'

import SessionProvider, {
  ThemeContext
} from '@/common/ui/context/theme-context'
import { whiteTheme } from '~/theme'

const TestComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext)

  return (
    <div>
      <p data-testid='theme'>{JSON.stringify(theme())}</p>
      <button
        data-testid='set-theme'
        onClick={() => setTheme(prev => ({ ...prev, isDark: !prev.isDark }))}
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}

describe('sessionProvider', () => {
  beforeEach(() => {
    document.body.classList.remove('dark')
  })

  it('provides the initial context values', () => {
    expect.assertions(1)

    render(() => (
      <SessionProvider>
        <TestComponent />
      </SessionProvider>
    ))

    expect(screen.getByTestId('theme')).toHaveTextContent(
      JSON.stringify(whiteTheme)
    )
  })

  it('updates the theme context value', () => {
    expect.assertions(1)

    render(() => (
      <SessionProvider>
        <TestComponent />
      </SessionProvider>
    ))

    const button = screen.getByTestId('set-theme')
    button.click()

    expect(screen.getByTestId('theme')).toHaveTextContent(
      JSON.stringify({ ...whiteTheme, isDark: true })
    )
  })

  it('initializes with dark mode if the body has dark class', () => {
    expect.assertions(1)

    document.body.classList.add('dark')

    render(() => (
      <SessionProvider>
        <TestComponent />
      </SessionProvider>
    ))

    expect(screen.getByTestId('theme')).toHaveTextContent(
      JSON.stringify({ ...whiteTheme, isDark: true })
    )
  })
})
