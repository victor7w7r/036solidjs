import {
  type Accessor,
  type Component,
  createContext,
  createSignal,
  type JSX,
  type Setter
} from 'solid-js'

type ContextProps = Readonly<{
  data: Accessor<string>
  setData: Setter<string>
}>

// eslint-disable-next-line import/exports-last
export const DataContext = createContext<ContextProps>({} as ContextProps)

const DataProvider: Component<Readonly<{ children?: JSX.Element }>> = props => {
  const [data, setData] = createSignal('')

  return (
    <DataContext.Provider
      value={{
        data,
        setData
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
export default DataProvider
