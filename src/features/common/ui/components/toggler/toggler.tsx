import './toggler.css'

import { useTheme } from '@/common/ui/hooks'

export const Toggler = () => {
  const { isDark, toggle, togglePeer } = useTheme()

  return (
    <div class='relative'>
      <label
        class='mb-4 inline-flex cursor-pointer items-center'
        for='checked-toggle'
      >
        <input
          checked={isDark()}
          class='peer sr-only'
          id='checked-toggle'
          onChange={toggle}
          type='checkbox'
          value=''
        />
        <div class={`${togglePeer()} toggle-design peer`} />
        <span class='toggle-title'>Dark Mode</span>
      </label>
    </div>
  )
}
