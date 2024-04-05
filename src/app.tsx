import { Router } from '@solidjs/router'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'

import { routes } from '~/router'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>{routes}</Router>
    <SolidQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
