/* eslint-disable perfectionist/sort-objects */
export const storeRouter: RouteDefinition = {
  path: '/store',
  component: lazy(() => import('@/store/ui/pages/store'))
}
