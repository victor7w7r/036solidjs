type CommonElements = {
  control: string
  dark: string
  white: string
}

const stdElements: CommonElements = {
  control: 'bg-slate-700/30',
  dark: 'dark:bg-zinc-900',
  white: 'bg-white'
}

export type AppTheme = CommonElements & {
  isDark: boolean
  togglePeer: string
}

export const whiteTheme: AppTheme = {
  ...stdElements,
  isDark: false,
  togglePeer: 'peer-checked:bg-white'
}

export const darkTheme: AppTheme = {
  ...stdElements,
  isDark: true,
  togglePeer: 'peer-checked:bg-dark'
}
