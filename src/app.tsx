import '~/styles/global.css'

import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'

import DataProvider from '@/common/ui/context/data-context'
import ThemeProvider from '@/common/ui/context/theme-context'
import { routes } from '~/router'

const queryClient = new QueryClient()

export const App = () => (
  <ThemeProvider>
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <Router>{routes}</Router>
        <SolidQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </DataProvider>
  </ThemeProvider>
)
