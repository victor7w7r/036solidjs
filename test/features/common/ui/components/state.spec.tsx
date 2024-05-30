import { render, screen } from '@solidjs/testing-library'

import { State } from '@/common/ui/components'
import { DataContext } from '@/common/ui/context/data-context'

const dataMock = vi.fn()
const setDataMock = vi.fn()

const renderWithContext = (dataValue: string) => {
  dataMock.mockReturnValue(dataValue)
  return render(() => (
    <DataContext.Provider value={{ data: dataMock, setData: setDataMock }}>
      <State />
    </DataContext.Provider>
  ))
}

describe('state', () => {
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
