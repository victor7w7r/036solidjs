import { render, screen } from '@solidjs/testing-library'
import { createQuery } from '@tanstack/solid-query'

import { Call } from '@/home/ui/components/call/call'
import { inject } from '~/di'

const queryMock = vi.fn()

vi.mock('@tanstack/solid-query', () => ({
  createQuery: queryMock
}))

vi.mock('~/di', () => ({
  inject: {
    resolve: vi.fn()
  }
}))

describe('call', () => {
  it('renders Spinner when query is pending', () => {
    expect.assertions(1)

    queryMock.mockReturnValue({
      isPending: true
    })

    render(Call)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders error message when query encounters an error', () => {
    expect.assertions(1)

    createQuery.mockReturnValue({
      isError: true
    })

    render(Call)

    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('renders correct data when query is successful', () => {
    expect.assertions(1)

    const mockData = {
      askPrice: '50000',
      symbol: 'BTC'
    }
    createQuery.mockReturnValue({
      data: mockData,
      isSuccess: true
    })

    render(Call)

    expect(screen.getByText(`Symbol: ${mockData.symbol}`)).toBeInTheDocument()
    expect(screen.getByText(`Price: ${mockData.askPrice}`)).toBeInTheDocument()
  })
})
