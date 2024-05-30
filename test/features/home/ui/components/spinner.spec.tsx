import { render } from '@solidjs/testing-library'

import { Spinner } from '@/home/ui/components/spinner/spinner'

describe('spinner', () => {
  it('renders without crashing', () => {
    expect.assertions(1)

    const { container } = render(() => <Spinner />)
    expect(container).toBeTruthy()
  })

  it('contains two path elements', () => {
    expect.assertions(1)

    const { container } = render(() => <Spinner />)
    const paths = container.querySelectorAll('path')
    expect(paths).toHaveLength(2)
  })

  it('has correct class names', () => {
    expect.assertions(5)

    const { container } = render(() => <Spinner />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('mr-2')
    expect(svg).toHaveClass('size-8')
    expect(svg).toHaveClass('animate-spin')
    expect(svg).toHaveClass('fill-white')
    expect(svg).toHaveClass('text-gray-400/50')
  })

  it('has correct attributes', () => {
    expect.assertions(4)

    const { container } = render(() => <Spinner />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('fill', 'none')
    expect(svg).toHaveAttribute('role', 'status')
    expect(svg).toHaveAttribute('viewBox', '0 0 100 101')
    expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg')
  })
})
