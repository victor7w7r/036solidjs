import { fireEvent, render, screen } from '@solidjs/testing-library'

import { Toggler } from '@/common/ui/components/toggler/toggler'

const mocks = vi.hoisted(() => ({
  mockIsDark: vi.fn().mockReturnValue(false),
  mockToggle: vi.fn(),
  mockTogglePeer: vi.fn().mockReturnValue('light-mode')
}))

vi.mock('@/common/ui/hooks', () => ({
  useTheme: () => ({
    isDark: mocks.mockIsDark,
    toggle: mocks.mockToggle,
    togglePeer: mocks.mockTogglePeer
  })
}))

describe('toggler', () => {
  it('renders the component with initial light mode', () => {
    expect.assertions(2)

    render(() => <Toggler />)

    expect(screen.getByText('Dark Mode')).toBeInTheDocument()

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('toggles the dark mode on checkbox change', () => {
    expect.assertions(1)

    render(() => <Toggler />)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(mocks.mockToggle).toHaveBeenCalled()
  })

  it('applies correct class based on theme', () => {
    expect.assertions(1)

    render(() => <Toggler />)

    const toggleDiv = screen.getByRole('checkbox').nextSibling
    expect(toggleDiv).toHaveClass('light-mode')
  })

  it('reflects dark mode when isDark is true', () => {
    expect.assertions(2)

    mocks.mockIsDark.mockReturnValueOnce(true)
    mocks.mockTogglePeer.mockReturnValueOnce('dark-mode')

    render(() => <Toggler />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()

    const toggleDiv = checkbox.nextSibling
    expect(toggleDiv).toHaveClass('dark-mode')
  })
})
