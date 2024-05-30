import { homeRouter } from '@/home/ui/router'

describe('loginRouter', () => {
  it('should define the correct path', () => {
    expect.assertions(1)

    expect(homeRouter.path).toBe('/')
  })

  it('should have a component', () => {
    expect.assertions(1)

    expect(homeRouter.component).toBeDefined()
  })
})
