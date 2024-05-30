/* eslint-disable @typescript-eslint/no-unsafe-return */
import { fireEvent, render, screen } from '@solidjs/testing-library'

import StorePage from '@/store/ui/pages/store'

const setDataMock = vi.fn()
const useThemeMock = vi.fn().mockReturnValue({ control: 'dark-mode' })

vi.mock('@/common/ui/context', () => ({
  DataContext: {
    Consumer: (props: { children: JSX.Element }) =>
      props.children({ setData: setDataMock }),
    Provider: (props: { children: JSX.Element }) => props.children
  }
}))

vi.mock('@/common/ui/hooks', () => ({
  useTheme: useThemeMock
}))

describe('storePage', () => {
  it('renders the component and interacts with it', () => {
    expect.assertions(2)

    render(() => <StorePage />)

    expect(
      screen.getByText('Write anything in this form and send!')
    ).toBeInTheDocument()

    const input = screen.getByPlaceholderText(' ')
    fireEvent.change(input, { target: { value: 'Test input' } })

    const sendButton = screen.getByText('Send')
    fireEvent.click(sendButton)

    expect(setDataMock).toHaveBeenCalledWith('Test input')
  })

  it('navigates to home on button click', () => {
    expect.assertions(2)

    render(() => <StorePage />)

    const navigateMock = vi.fn()
    vi.mock('@solidjs/router', () => ({
      useNavigate: () => navigateMock
    }))

    const homeButton = screen.getByText('Go to Home')
    fireEvent.click(homeButton)

    expect(navigateMock).toHaveBeenCalledWith('/')
  })
})
