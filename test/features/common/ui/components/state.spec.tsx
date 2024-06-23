import { render, screen } from '@solidjs/testing-library'

import { State } from '@/common/ui/components'
import { DataContext } from '@/common/ui/context/data-context'

describe('state', () => {
  const mocks = vi.hoisted(() => ({
    mockData: vi.fn(),
    mockSetData: vi.fn()
  }))

  const renderWithContext = (dataValue: string) => {
    mocks.mockData.mockReturnValue(dataValue)
    return render(() => (
      <DataContext.Provider
        value={{ data: mocks.mockData, setData: mocks.mockSetData }}
      >
        <State />
      </DataContext.Provider>
    ))
  }

  it('renders fallback text when data is empty', () => {
    expect.assertions(1)

    renderWithContext('')

    expect(screen.getByText('Store State: Not yet.')).toBeInTheDocument()
  })

  it('renders the correct state when data is present', () => {
    expect.assertions(2)

    renderWithContext('test data')

    expect(screen.getByText('Store State: Yes, you write')).toBeInTheDocument()
    expect(screen.getByText('test data')).toBeInTheDocument()
  })
})
