import '@/home/ui/styles/home.css'

import { State } from '@/common/ui/components'
import { useTheme } from '@/common/ui/hooks'
import { Call } from '@/home/ui/components'
import brand from '~/assets/brand.png'
import brandwhite from '~/assets/brandwhite.png'
import tailwind from '~/assets/tailwind.png'
import tailwindwhite from '~/assets/tailwindwhite.png'

export default () => {
  const {
    changeBlue,
    changeEmerald,
    changePurple,
    changeRed,
    control,
    isDark
  } = useTheme()

  const navigate = useNavigate()

  return (
    <div class='flex h-min flex-col justify-center backdrop-blur-xl'>
      <div class='card-flex'>
        <div class={`card-container ${control}`}>
          <p class='adaptable-amina'>Made with love by</p>
          <img
            alt=''
            class='scale-75 lg:scale-100'
            data-testid='brand'
            height={200}
            src={isDark() ? brandwhite : brand}
            width={400}
          />
          <h3 class='adaptable-center-text-base mb-4 font-semibold'>
            Happy Hacking! with Typescript?
          </h3>
          <p class='adaptable-center-text-base mb-8 font-roboto'>
            Roboto Font works with
          </p>
          <img
            alt=''
            class='scale-50 lg:scale-75 tall:scale-75'
            data-testid='tailwind'
            height={200}
            src={isDark() ? tailwindwhite : tailwind}
            width={400}
          />
        </div>
        <div class={`card-container ${control}`}>
          <State />
          <h3 class='adaptable-center-text-bold'>Lets see bitcoin price</h3>
          <Call />
        </div>
      </div>
      <div class='centered-button-ctn'>
        <button
          class='standard-button'
          onClick={() => navigate('/store')}
          type='button'
        >
          Go to store
        </button>
      </div>
      <div class='mx-auto -mt-1 flex w-fit flex-row gap-7'>
        <button
          aria-label='blue-button'
          class='blue-button'
          onClick={changeBlue}
          role='button'
        />
        <button
          aria-label='purple-button'
          class='purple-button'
          onClick={changePurple}
          role='button'
          type='button'
        />
        <button
          aria-label='red-button'
          class='red-button'
          onClick={changeRed}
          role='button'
          type='button'
        />
        <button
          aria-label='emerald-button'
          class='emerald-button'
          onClick={changeEmerald}
          role='button'
          type='button'
        />
      </div>
    </div>
  )
}
