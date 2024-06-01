export const imports = [
  {
    '@solidjs/router': ['A'],
    '~/di': ['inject'],
    '~/env': ['environment'],
    'fp-ts/lib/function': ['pipe'],
    'vitest-mock-extended': ['mock']
  }
]

export const importTypes = [
  {
    from: 'solid-js',
    imports: ['Component, JSX', 'Accessor', 'Setter'],
    type: true
  },
  {
    from: 'axios',
    imports: ['AxiosInstance'],
    type: true
  },
  {
    from: '@solidjs/router',
    imports: ['RouteDefinition'],
    type: true
  }
]
