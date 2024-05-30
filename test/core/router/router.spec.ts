import { routes } from '~/router'

describe('loginRouter', () => {
  it('should define the correct path', () => {
    expect.assertions(1)

    expect(routes.path).toBe('/')
  })

  it('should have a component', () => {
    expect.assertions(1)

    expect(routes.component).toBeDefined()
  })
})
