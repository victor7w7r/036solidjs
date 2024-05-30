import './header.css'

import { Toggler } from '@/common/ui/components/toggler/toggler'
import { useTheme } from '@/common/ui/hooks'

export const Header = () => {
  const { control } = useTheme()

  return (
    <div class='flex items-center justify-center'>
      <nav class={`navbar ${control}`}>
        <div class='mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8'>
          <div class='flex flex-1 shrink-0 items-stretch justify-start '>
            <img alt='' height={30} src='/favicon.svg' width={30} />
            <A class='adaptable-text ml-4 font-medium' href='/'>
              Solidjs Template
            </A>
          </div>
          <div class='toggler-container'>
            <Toggler />
          </div>
        </div>
      </nav>
    </div>
  )
}
