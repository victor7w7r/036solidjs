import { storeRouter } from '@/store/ui/router'

describe('loginRouter', () => {
  it('should define the correct path', () => {
    expect.assertions(1)

    expect(storeRouter.path).toBe('/store')
  })

  it('should have a component', () => {
    expect.assertions(1)

    expect(storeRouter.component).toBeDefined()
  })
})
