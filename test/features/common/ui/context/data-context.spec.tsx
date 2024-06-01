import { render, screen } from '@solidjs/testing-library'

import DataProvider, { DataContext } from '@/common/ui/context/data-context'

const TestComponent = () => {
  const { data, setData } = useContext(DataContext)

  return (
    <div>
      <p data-testid='data'>{data()}</p>
      <button data-testid='set-data' onClick={() => setData('new data')}>
        Set Data
      </button>
    </div>
  )
}

describe('dataProvider', () => {
  it('provides the initial context values', () => {
    expect.assertions(1)

    render(() => (
      <DataProvider>
        <TestComponent />
      </DataProvider>
    ))

    expect(screen.getByTestId('data')).toHaveTextContent('')
  })

  it('updates the context values', () => {
    expect.assertions(1)

    render(() => (
      <DataProvider>
        <TestComponent />
      </DataProvider>
    ))

    const button = screen.getByTestId('set-data')
    button.click()

    expect(screen.getByTestId('data')).toHaveTextContent('new data')
  })
})
