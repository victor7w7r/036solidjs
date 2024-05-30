import { ThemeContext } from '@/common/ui/context'
import { darkTheme, whiteTheme } from '~/theme/app-theme'

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggle = () => {
    theme().isDark
      ? setTheme({
          ...theme(),
          control: whiteTheme.control,
          isDark: false,
          togglePeer: '',
          white: whiteTheme.white
        })
      : setTheme({
          ...theme(),
          control: whiteTheme.control,
          dark: darkTheme.dark,
          isDark: true,
          togglePeer: darkTheme.togglePeer
        })

    document.body.classList.toggle('dark')
  }

  const changeSelector = (selector: string) =>
    theme().isDark
      ? setTheme({
          ...theme(),
          control: `bg-${selector}-700/30`,
          dark: `dark:bg-${selector}-900`,
          togglePeer: `peer-checked:bg-${selector}-500`
        })
      : setTheme({
          ...theme(),
          control: `bg-${selector}-700/30`,
          togglePeer: `peer-checked:bg-${selector}-300`,
          white: `bg-${selector}-300`
        })

  const changeBlue = () => changeSelector('sky')

  const changePurple = () => changeSelector('purple')

  const changeRed = () => changeSelector('red')

  const changeEmerald = () => changeSelector('emerald')

  return {
    changeBlue,
    changeEmerald,
    changePurple,
    changeRed,
    control: theme().control,
    dark: theme().dark,
    isDark: () => theme().isDark,
    toggle,
    togglePeer: () => theme().togglePeer,
    white: theme().white
  }
}
