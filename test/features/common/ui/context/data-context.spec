import { render, screen } from '@solidjs/testing-library'

import DataProvider, { DataContext } from '@/common/ui/context/data-context'

describe('dataProvider', () => {
  it('renders correctly', () => {
    expect.assertions(1)

    render(() => <DataProvider />)
    expect(screen.getByTestId('data-provider')).toBeInTheDocument()
  })

  it('provides the correct initial value', () => {
    expect.assertions(1)

    let contextValue
    render(() => {
      const { data } = useContext(DataContext)
      contextValue = data()
      return <div />
    })
    expect(contextValue).toBe('')
  })

  it('updates the data value correctly', () => {
    expect.assertions(1)

    let contextValue
    render(() => {
      const { data, setData } = useContext(DataContext)
      setData('test')
      contextValue = data()
      return <div />
    })
    expect(contextValue).toBe('test')
  })
})
