import { render, screen } from '@solidjs/testing-library'
import { createQuery } from '@tanstack/solid-query'
import type { Mock } from 'vitest'

import { Call } from '@/home/ui/components/call/call'

describe('component', () => {
  vi.mock('~/di', () => ({ inject: { resolve: vi.fn() } }))

  vi.mock('@tanstack/solid-query', () => ({
    createQuery: vi.fn()
  }))

  it('renders a spinner while loading', () => {
    expect.assertions(1)
    ;(createQuery as Mock).mockReturnValue({
      data: undefined,
      isError: false,
      isPending: true,
      isSuccess: false
    })

    render(() => <Call />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('renders an error message when there is an error', () => {
    expect.assertions(1)
    ;(createQuery as Mock).mockReturnValue({
      data: undefined,
      isError: true,
      isPending: false,
      isSuccess: false
    })

    render(() => <Call />)
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('renders bitcoin data when the query is successful', () => {
    expect.assertions(4)

    const mockData = { askPrice: '50000', symbol: 'BTC' }
    ;(createQuery as Mock).mockReturnValue({
      data: mockData,
      isError: false,
      isPending: false,
      isSuccess: true
    })

    render(() => <Call />)
    expect(screen.getByText(/Symbol:/)).toBeInTheDocument()
    expect(screen.getByText(/BTC/)).toBeInTheDocument()
    expect(screen.getByText(/Price:/)).toBeInTheDocument()
    expect(screen.getByText(/50{4}/)).toBeInTheDocument()
  })
})
