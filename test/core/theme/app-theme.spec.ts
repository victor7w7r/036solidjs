import { stdElements } from '~/theme'

describe('stdElements', () => {
  it('should have control property', () => {
    expect.assertions(1)

    expect(stdElements.control).toBe('bg-slate-700/30')
  })

  it('should have dark property', () => {
    expect.assertions(1)

    expect(stdElements.dark).toBe('dark:bg-zinc-900')
  })

  it('should have white property', () => {
    expect.assertions(1)

    expect(stdElements.white).toBe('bg-white')
  })
})
