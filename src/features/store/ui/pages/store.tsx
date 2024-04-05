import '@/store/ui/styles/store.css'

import { useNavigate } from '@solidjs/router'
import { createSignal, useContext } from 'solid-js'

import { State } from '@/common/ui/components'
import { DataContext } from '@/common/ui/context'
import { useTheme } from '@/common/ui/hooks'

export default () => {
  const { control } = useTheme()
  const { setData } = useContext(DataContext)
  const [text, setText] = createSignal('')
  const navigate = useNavigate()

  return (
    <div class='my-auto flex size-full flex-col items-center justify-center'>
      <div class={`card-container ${control}`}>
        <h3 class='store-title'>Write anything in this form and send!</h3>
        <div class='relative z-0 mx-auto mt-6 w-64'>
          <input
            class='input-design peer'
            name='text'
            onChange={e => {
              setText((e.target as HTMLInputElement).value)
            }}
            placeholder=' '
            type='text'
          />
          <label class='floating-design' for='floating'>
            here
          </label>
        </div>
        <div class='store-btn'>
          <button
            class='standard-button'
            onClick={() => setData(text())}
            type='button'
          >
            Send
          </button>
        </div>
        <State />
      </div>
      <div class='centered-button-ctn'>
        <button
          class='standard-button'
          onClick={() => navigate('/')}
          type='button'
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}
