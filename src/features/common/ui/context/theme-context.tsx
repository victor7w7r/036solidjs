import { type AppTheme, whiteTheme } from '~/theme'

type ContextProps = Readonly<{
  setTheme: Setter<AppTheme>
  theme: Accessor<AppTheme>
}>

// eslint-disable-next-line import/exports-last
export const ThemeContext = createContext<ContextProps>({} as ContextProps)

const SessionProvider: Component<
  Readonly<{ children?: JSX.Element }>
> = props => {
  const [theme, setTheme] = createSignal(whiteTheme)

  onMount(() =>
    setTheme(thm => ({
      ...thm,
      isDark: document.body.classList.contains('dark')
    }))
  )

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        theme
      }}
    >
      <div
        class={`min-h-screen transition-colors duration-1000 ${theme().white} ${theme().dark}`}
      >
        {props.children}
      </div>
    </ThemeContext.Provider>
  )
}
export default SessionProvider
